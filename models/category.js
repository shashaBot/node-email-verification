const mongoose = require('mongoose');

let childCategorySchema = new mongoose.Schema({
    _id: { type: String },
    categoryname: { type: String }
}, { _id: false });

let categorySchema = new mongoose.Schema({
    categoryname: { type: String, required: true },
    parentcategory: { type: String, default: null },
    parentId: {type: String, default: null},
    childcategories: [childCategorySchema]
});

var Category = mongoose.model('categories', categorySchema);
module.exports = Category;

module.exports.getRootCategories = (callback) => {
  Category.find({parentcategory: null}, callback);
}

module.exports.getSubCategories = (parentId, callback) => {
  Category.findById(parentId, callback);
}

module.exports.addRootCategory = (newCategory, callback) => {
  newCategory.save(callback);
}

module.exports.getBottomCats = ( parentId, callback) => {
  let bottomCatIds = [];
  getBottomCategoryIds(parentId, parentId, bottomCatIds, (err, cats) => {
    if(err) return callback(err);
    console.log(cats);
    return callback(null, cats);
  });
}

module.exports.getSessionCats = (catId, callback) => {
  let cats = {};
  cats.catthree = catId;
  Category.findById(catId, (err, cat3) => {
    if(err) return callback(err);
    cats.cattwo = cat3.parentId;
    Category.findById(cat3.parentId, (err, cat2) => {
      if(err) return callback(err);
      cats.catthrees = cat2.childcategories;
      cats.catone = cat2.parentId;
      console.log('cat two: ', cat2);
      Category.findById(cat2.parentId, (err, cat1) => {
        if(err) return callback(err);
        cats.cattwos = cat1.childcategories;
        return callback(null, cats);
      })
    })
  })
}

// function getBottomCategoryIds(parentId, currId, catIds, callback) {
//   Category.find({parentId: currId}, (err, cats) => {
//     if(err) return callback(err);
//     if(!cats) return callback(null, null);
//     cats.forEach((cat, index) => {
//       if(cat.childcategories.length) {
//         getBottomCategoryIds(parentId, cat._id, catIds, (err, catIds) => {
//           console.log('index:', index);
//           console.log('cats length', cats.length);
//           console.log('catIds', catIds);
//           console.log(currId);
//           console.log(parentId);
//           if(index === cats.length-1) {
//             return callback(null, catIds);
//           }
//         });
//       } else {
//         catIds.push(cat._id);
//         if(index === cats.length -1){
//           return callback(null, catIds);
//         }
//       }
//     })
//   })
// }

module.exports.addSubCategory = (newCategory, parentId, callback) => {
  Category.findById(parentId, (err, category) => {
    if(err) return callback(err);
    if(!category) return callback(null, null);
    category.childcategories.push({_id: newCategory._id, categoryname: newCategory.categoryname});
    category.save(err => {
      if(err) return callback(err);
      newCategory.save(callback);
    });
  })
}
