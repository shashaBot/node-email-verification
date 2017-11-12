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
