const { default: mongoose } = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title.'],
    },
    content: {
      type: String,
      required: [true, 'Please provide content.'],
    },
    author: {
      type: String,
      required: [true, 'Please provide author email.'],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
