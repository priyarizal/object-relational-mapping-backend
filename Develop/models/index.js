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
Categories.hasMany(product, {
  foreignKey: 'category_id',
  onDelete: 'Cascade',
  through:{
    model: ProductTag, 
    unique: false
  },
  as: 'clothingprodcuts'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, 
  {through : 
    ProductTag});


// Tags belongToMany Products (through ProductTag)

Tag.belongToMany(Product,
   {through : 
    ProductTag});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
