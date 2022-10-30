const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

// middleware
const { auth } = require('../middleware/auth');

// POST - Create a new product
// GET - Get all products
router
  .route('/')
  .post(auth, productController.createProduct)
  .get(auth, productController.getProducts);

// PATCH - Update a product
// DELETE - Delete a product
router
  .route('/:id')
  .patch(auth, productController.updateProduct)
  .delete(auth, productController.deleteProduct);

module.exports = router;
