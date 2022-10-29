const mongoose = require('mongoose');
const validator = require('validator');

// user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
      minLength: [3, 'Name must be at least 3 characters.'],
      maxLength: [50, 'Name is too large'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      trim: true,
      minLength: [6, 'Password must be at least 6 characters.'],
    },
    role: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

module.exports = User;
