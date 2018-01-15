const mongoose = require('mongoose');
const Session = require('./session');

mongoose.Promise = Promise;

let childCategorySchema = new mongoose.Schema({
    _id: { type: String },
    categoryname: { type: String }
}, { _id: false });

let categorySchema = new mongoose.Schema({
    categoryname: { type: String, required: true },
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

module.exports.removeAll = (catIds, callback) => {
  Category.remove({_id: {$in: catIds}}, callback);
}

module.exports.getBottomCats = (catId, callback) => {
  let cats = [];
  getSubCats(catId, cats)
    .then((cats) => {
      console.log('cats: ', cats);
      callback(null, cats);
    }, err => {
      callback(err);
    })
}

function getSubCats(catId, cats) {
  return new Promise((resolve, reject) => {
    Category.findById(catId).exec()
      .then(cat => {
        let promiseArr = [];
        if(!cat) return reject(null);
        if(cat.childcategories.length) {
          cat.childcategories.forEach((child, index) => {
            cats.push(child._id);
            let childPromise = getSubCats(child._id, cats);
            promiseArr.push(childPromise);
            console.log(child.categoryname);
            if(index === cat.childcategories.length-1){
              console.log(promiseArr);
              Promise.all(promiseArr).then((catsArr) => {
                resolve(cats);
              }, err => {
                reject(err);
              })
            }
          })
        } else {
          resolve([]);
        }

      }, err => {
        reject(err);
      })
  })
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
