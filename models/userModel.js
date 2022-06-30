const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide email.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide password.'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
