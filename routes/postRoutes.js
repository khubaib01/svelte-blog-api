const express = require('express');
const {
  allPosts,
  postById,
  addPost,
  updatePost,
  deletePost,
} = require('../controllers/postControllers');
const postRoutes = express.Router();

// GET
postRoutes.get('/', allPosts);
postRoutes.get('/:id', postById);
// POST
postRoutes.post('/', addPost);
// PATCH
postRoutes.patch('/:id', updatePost);
// DELETE
postRoutes.delete('/:id', deletePost);

module.exports = postRoutes;
