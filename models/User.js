const mongoose = require('mongoose');
const validator = require('validator');
const jtw = require('jsonwebtoken');

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

userSchema.methods.generateAuthToken = function () {
  const token = jtw.sign({ id: this._id }, 'secretKey', { expiresIn: '4h' });
  return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
