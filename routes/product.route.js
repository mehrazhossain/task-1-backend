const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

// POST - Create a new product
// GET - Get all products
router
  .route('/')
  .post(productController.createProduct)
  .get(productController.getProducts);

// PATCH - Update a product
// DELETE - Delete a product
router
  .route('/:id')
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
