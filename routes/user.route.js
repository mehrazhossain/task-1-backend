const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// POST - Create a new product
// GET - Get all products
router.route('/').post(userController.createUser).get(userController.getUsers);

// PATCH - Update a product
// DELETE - Delete a product
router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
