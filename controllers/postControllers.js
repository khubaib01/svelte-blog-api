const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Post = require('../models/postModel.js');

// GET -> /api/posts
const allPosts = asyncHandler(async (req, res) => {
  const userId = req.query.userId;
  const posts = await Post.find({ author: userId });
  res.json(posts);
});

// GET -> /api/posts/:id
const postById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.json(post);
});

// POST -> /api/posts
const addPost = asyncHandler(async (req, res) => {
  const newPost = req.body;
  const respPost = await Post.create(newPost);
  res.json(respPost);
});

// PATCH -> /api/posts/:id
const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const respUpdate = await Post.findByIdAndUpdate(id, updates);
  res.json(respUpdate);
});

// DELETE -> /api/posts/:id
const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const respDelete = await Post.findByIdAndDelete(id);
  res.json(respDelete);
});

module.exports = {
  allPosts,
  postById,
  addPost,
  updatePost,
  deletePost,
};
