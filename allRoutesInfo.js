const allRoutes = {
  users: {
    allUsers: '/api/users',
    singleUser: '/api/users/:id',
    addUser: '/api/users',
    authenticateUser: '/api/users/validuser',
    updateUser: '/api/users/:id',
    deleteUser: '/api/users/:id',
  },
  posts: {
    allPosts: '/api/posts',
    singlePost: '/api/posts/:id',
    addPost: '/api/posts',
    updatePost: '/api/posts/:id',
    deletePost: '/api/posts/:id',
  },
};

module.exports = allRoutes;
