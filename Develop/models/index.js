// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  through:{
    model: ProductTag, 
    unique: false
  },
  as: 'products'
}); 

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'Cascade',
  through:{
    model: ProductTag, 
    unique: false
  },
  as: 'clothingproducts'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, 
  {through : 
    ProductTag});


// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product,
   {through : 
    ProductTag});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
