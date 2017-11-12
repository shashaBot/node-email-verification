const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Category = require('../models/category');


router.get('/getrootcategories', passport.authenticate('jwt', {session: false}), (req, res) => {
  Category.getRootCategories((err, categories) => {
    if(err) return res.json({success: false, msg: 'Error in fetching categories!', error: err})
    res.json({success: true, categories: categories})
  });
})

router.post('/getsubcategories', passport.authenticate('jwt', {session: false}), (req, res) => {
  Category.getSubCategories(req.body.id, (err, category) => {
    if(err) return res.json({success: false, msg: 'Error in fetching categories'})
    res.json({success: true, category: category});
  })
})

router.post('/addrootcategory', (req, res) => {
  let newCategory = new Category({
    categoryname: req.body.categoryname
  })
  Category.addRootCategory(newCategory, (err, category) => {
    if(err) return res.json({success: false, msg: 'Error in adding category', error: err});
    res.json({success: true, category: category});
  })
})

router.post('/addsubcategory', (req, res) => {
  let newCategory = new Category({
    categoryname: req.body.categoryname,
    parentcategory: req.body.parentcategory,
    parentId: req.body.parentId
  })
  Category.addSubCategory(newCategory, req.body.parentId, (err, category) => {
    if(err) return res.json({success: false, msg: 'Error in adding category', error: err});
    if(!category) return res.status(404).json({success: false});
    res.json({success: true, category: category});
  })
})

router.post('/updatecategory', (req, res, next) => {
  let newcategoryname = req.body.category.newcategoryname;
  let oldcategoryname = req.body.category.oldcategoryname;

  Category.findByIdAndUpdate(req.body.id, { categoryname: newcategoryname },
    function (err, category) {
      console.log('updating category:', category);
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!category) {
        return res.status(404).send();
      }

      if (category.parentcategory) {
        updateUpCategories(category._id, newcategoryname, oldcategoryname, next);
      }
      if (category.childcategories.length) {
        updateBelowCategories(category._id, oldcategoryname, newcategoryname, next);
      }
      return res.json({ success: true, category: category });

    })
});

function updateUpCategories(categoryId, newcategoryname, oldcategoryname, next) {
  Category.findById( categoryId, function (err, parentCategory) {
    if (err) {
      console.log(err);
      return next(err);
    }
    let catIndex = parentCategory.childcategories.findIndex(ct => ct._id === categoryId.toString());
    console.log('index of updated child: ', catIndex);
    parentCategory.childcategories[catIndex].categoryname = newcategoryname;
    parentCategory.save((err, saved) => {
      if(err){
        console.log(err)
        return next(err);
      }
      return next();
    });
  })
}

function updateBelowCategories(categoryId, oldcategoryname, newcategoryname, next) {
  Category.find({ parentId: categoryId }, function (err, categories) {
    console.log(categories);
    var connectedCategoryIds = [];
    categories.forEach(function (item) {
      connectedCategoryIds.push(item._id);
    });

    Category.update({ _id: { '$in': connectedCategoryIds } }, { parentcategory: newcategoryname },
      { multi: true },
      function (err, lastCategories) {
        if (err) {
          console.log(err);
          return next(err);
        }
        else {
          return next();
        }
      });
  });
}


router.post('/deletecategory', (req, res, next) => {
  Category.findByIdAndRemove(req.body.id, function (err, category) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    console.log('removed category: ', category);
    if (!category) {
      return res.status(404).send();
    }
    if (category.childcategories.length) {
      Category.find({ parentId: req.body.id }, function (err, categories) {
        deleteBelowCategories(categories, next);
      });
    }
    if (category.parentId) {
      deleteUpCategories(category, next);
    }
    return res.json({ success: true });

  })
});

function deleteUpCategories(category, next) {
  Category.findById(category.parentId, function (err, parentCategory) {
    if (err) {
      console.log(err);
      return next(err);
    }
    let objIndex = parentCategory.childcategories.findIndex(ct => ct._id === category._id.toString());
    let removed = parentCategory.childcategories.splice(objIndex, 1);
    console.log('removed from parent: ', removed);
    parentCategory.save();
    return next();
  })
}

function deleteBelowCategories(categories, next) {
  var connectedCategoryIds = [];
  var connectedSubCategoryIds = [];
  categories.forEach(function (item) {
    connectedCategoryIds.push(item._id);
    if (item.childcategories && item.childcategories !== []) {
      for (var index = 0; index < item.childcategories.length; index++) {
        connectedSubCategoryIds.push(item.childcategories[index]);
      }
    }
  });

  Category.remove({ '_id': { '$in': connectedCategoryIds } }, function (err, lastCategories) {
    if (err) {
      console.log(err);
      return next(err);
    }

    if (connectedSubCategoryIds.length) {
      deleteBelowCategories(connectedSubCategoryIds, next);
    } else {
      return next();
    }
  });
}

module.exports = router;
