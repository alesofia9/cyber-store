// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// TODO: Products belongsTo Category
Product.belongsto(Category, {
  foreignKey: 'category_id',
});

// TODO: Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// TODO: Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
})

// TODO: Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
