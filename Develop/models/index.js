// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreinKey: 'category_id',
});

// Categories have many Products
Product.hasMany(Product, {
  foreinKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: ProductTag,
  foreinKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Product.belongToMany(Tag, {
  through: ProductTag,
  foreinKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
