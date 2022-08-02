// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'Cascade'
    // unique: false
  // as: 'products'
}); 

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
    // unique: false
  // as: 'clothingproducts'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through : 
    ProductTag});



// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  foreignkey: 'tag_id',
  through : 
    ProductTag});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
