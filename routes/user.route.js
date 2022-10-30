const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

// GET - Get all products
router.route('/').get(userController.getUsers);

// PATCH - Update a product
// DELETE - Delete a product
router
  .route('/:id')
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
