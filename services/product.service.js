const Product = require('../models/Product');

// Create product
exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

exports.updateProductService = async (id, data) => {
  const response = await Product.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return response;
};

exports.deleteProductService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
