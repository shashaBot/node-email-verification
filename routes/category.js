const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Category = require('../models/category');
const Session = require('../models/session');


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

router.post('/addrootcategory', passport.authenticate('jwt', {session: false}), (req, res) => {
  let newCategory = new Category({
    categoryname: req.body.categoryname
  })
  Category.addRootCategory(newCategory, (err, category) => {
    if(err) return res.json({success: false, msg: 'Error in adding category', error: err});
    res.json({success: true, category: category});
  })
})

router.post('/addsubcategory', passport.authenticate('jwt', {session: false}), (req, res) => {
  let newCategory = new Category({
    categoryname: req.body.categoryname,
    parentId: req.body.parentId
  })
  Category.addSubCategory(newCategory, req.body.parentId, (err, category) => {
    if(err) return res.json({success: false, msg: 'Error in adding category', error: err});
    if(!category) return res.status(404).json({success: false});
    res.json({success: true, category: category});
  })
})

router.post('/getSessionCats', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Category.getSessionCats(req.body.catId, (err, cats) => {
    if(err) return res.json({success: false, msg: 'Server error'});
    res.json({success: true, cats: cats});
  })
})

router.post('/updatecategory', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let newcategoryname = req.body.category.newcategoryname;
  let oldcategoryname = req.body.category.oldcategoryname;

  Category.findByIdAndUpdate(req.body.id, { categoryname: newcategoryname },
    function (err, category) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      if (!category) {
        return res.status(404).send();
      }

      if (category.parentId) {
        updateUpCategories(category, newcategoryname, (err, newCategory) => {
          if(err) return res.json({success: false});
          if (category.childcategories.length) {
            updateBelowCategories(category, newcategoryname, (err) => {
              if(err) return res.json({success: false});
              return res.json({ success: true, category: newCategory });
            });
          } else {
            return res.json({success: true, category: newCategory})
          }
        });
      } else if(category.childcategories.length) {
        updateBelowCategories(category, newcategoryname, (err) => {
          if(err) return res.json({success: false});
          return res.json({ success: true });
        });
      }

    })
});

function updateUpCategories(category, newcategoryname,next) {
  Category.findById( category.parentId, function (err, parentCategory) {
    if (err) {
      console.log(err);
      return next(err);
    }
    let catIndex = parentCategory.childcategories.findIndex(ct => {
      return (ct._id === category._id.toString())
    });
    console.log('index of updated child: ', catIndex);
    parentCategory.childcategories[catIndex].categoryname = newcategoryname;
    parentCategory.save((err, saved) => {
      if(err){
        console.log(err)
        return next(err);
      }
      return next(null, saved.childcategories[catIndex]);
    });
  })
}

function updateBelowCategories(category, newcategoryname, next) {
  var connectedCategoryIds = [];
  let categories = category.childcategories;
  console.log(categories);
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
}

router.post('/deletecategory', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  if(req.body.warn) {
    Category.getBottomCats(req.body.catId, (err, cats) => {
      if(err) return res.json({success: false, msg: 'Error in retrieving categories'})
      Session.find({categoryId: {$in: cats}}, (err, sessions) => {
        if(err) return res.json({success: false, msg: 'Server error'})
        if(sessions.length) {
          return res.json({success: false, msg: 'Active sessions present in categories. Please confirm delete.', catIds: cats, sessions: sessions});
        } else {
          cats.push(req.body.catId);
          deleteUpCategories(req.body.catId, next);
          Category.removeAll(cats, (err) => {
            if(err) return res.json({success: false, msg: 'Error in removing categories'})
            res.json({success: true})
          })
        }
      })
    })
  } else {
    let cats = req.body.catIds;
    cats.push(req.body.catId);
    let sessions = req.body.sessions;
    let sessionIds = [];
    sessions.forEach((session, index) => {
      sessionIds.push(session._id);
      if(index === sessions.length -1) {
        Session.remove({_id: {$in: sessionIds}}, (err) => {
          if(err) return res.json({success: false, msg: 'Error in removing sessions!'});
          deleteUpCategories(req.body.catId, next);
          Category.removeAll(cats, (err) => {
            if(err) return res.json({success: false, msg: 'Error in removing categories!'})
            res.json({success: true})
          })
        })
      }
    })
  }
})

function deleteUpCategories(catId, next) {
  Category.findById(catId, (err, category) => {
    if(err) return next(err);
    if(category) {
      if(category.parentId) {
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
    }
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
