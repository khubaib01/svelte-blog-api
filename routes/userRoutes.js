const express = require('express');
const {
  allUsers,
  userById,
  addUser,
  updateUser,
  deleteUser,
  authenticate,
} = require('../controllers/userControllers');
const userRoutes = express.Router();

// GET
userRoutes.get('/', allUsers);
userRoutes.get('/:id', userById);
// POST
userRoutes.post('/', addUser);
userRoutes.post('/validuser', authenticate);
// PATCH
userRoutes.patch('/:id', updateUser);
// DELETE
userRoutes.delete('/:id', deleteUser);

module.exports = userRoutes;
