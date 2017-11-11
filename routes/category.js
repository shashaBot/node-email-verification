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
  Category.addRootCategory(newCategory, (err) => {
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
    res.json({success: true, category: category});
  })
})

router.post('/updatecategory', (req, res, next) => {
  let newcategoryname = req.body.category.newcategoryname;
  let oldcategoryname = req.body.category.oldcategoryname;

  Category.findByIdAndUpdate({ _id: req.body.id }, { categoryname: newcategoryname },
    function (err, category) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!category) {
        return res.status(404).send();
      }

      if (category.parentcategory) {
        updateUpCategories(category, newcategoryname, oldcategoryname, next);
      }
      if (category.childcategories.length) {
        updateBelowCategories(oldcategoryname, newcategoryname, next);
      }
      return res.json({ success: true });

    })
});

function updateUpCategories(category, newcategoryname, oldcategoryname, next) {
  Category.findOne({ categoryname: category.parentcategory }, function (err, parentCategory) {
    if (err) {
      console.log(err);
      return next(err);
    }
    let newObj = parentCategory.childcategories.find(ct => ct.categoryname === oldcategoryname);
    newObj.categoryname = newcategoryname;
    parentCategory.save();
    return next();
  })
}

function updateBelowCategories(oldcategoryname, newcategoryname, next) {
  Category.find({ parentcategory: oldcategoryname }, function (err, categories) {
    var connectedCategoryIds = [];
    categories.forEach(function (item) {
      connectedCategoryIds.push(item._id);
    });

    Category.update({ '_id': { '$in': connectedCategoryIds } }, { parentcategory: newcategoryname },
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
  Category.findByIdAndRemove({ _id: req.body.id }, function (err, category) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!category) {
      return res.status(404).send();
    }
    if (category.childcategories.length) {
      Category.find({ parentcategory: req.body.categoryname }, function (err, categories) {
        deleteBelowCategories(categories, next);
      });
    }
    if (category.parentcategory) {
      deleteUpCategories(category, next);
    }
    return res.json({ success: true });

  })
});

function deleteUpCategories(category, next) {
  Category.findOne({ categoryname: category.parentcategory }, function (err, parentCategory) {
    if (err) {
      console.log(err);
      return next(err);
    }
    let objIndex = parentCategory.childcategories.findIndex(ct => ct.categoryname === category.categoryname);
    parentCategory.childcategories.splice(objIndex, 1);
    console.log(parentCategory.childcategories)
    parentCategory.save();
    return next();
  })
}

function deleteBelowCategories(categories, next) {
  var connectedCategoryIds = [];
  var connectedSubCategoryIds = [];
  categories.forEach(function (item) {
    connectedCategoryIds.push(item._id);
    if (item.childcategories && item.childcategories != []) {
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
