const { registerUserService } = require('../services/register.service');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res, next) => {
  const email = req.body.email;
  try {
    const register = await registerUserService(email);

    if (register) {
      return res.status(400).json({
        email: 'Email already exists',
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });

      //Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(
              (user) => res.json(user)
              // res.redirect('/users/login')
            )
            .catch((err) => console.log(err));
        });
      });
    }
    res.status(200).json({
      status: 'success',
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'registration failed',
    });
  }
};
