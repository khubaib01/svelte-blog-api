const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel.js');

// GET -> /api/users
const allUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// GET -> /api/users/:id
const userById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
});

// POST -> /api/users
const addUser = asyncHandler(async (req, res) => {
  const newUser = req.body;
  bcrypt.hash(newUser.password, 5, async (err, hash) => {
    newUser.password = hash;
    const respUser = await User.create(newUser);
    res.json(respUser);
  });
});

// POST -> /api/users/validuser
const authenticate = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        res.json({
          status: 'OK',
          _id: user.id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.json({ status: 'ERROR' });
      }
    });
  } else {
    res.json({ status: 'ERROR' });
  }
});

// PATCH -> /api/users/:id
const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const respUpdate = await User.findByIdAndUpdate(id, updates);
  res.json(respUpdate);
});

// DELETE -> /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const respDelete = await User.findByIdAndDelete(id);
  res.json(respDelete);
});

module.exports = {
  allUsers,
  userById,
  addUser,
  updateUser,
  deleteUser,
  authenticate,
};
