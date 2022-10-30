const { loginUserService } = require('../services/login.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await loginUserService(email);
  // Check if user not exists
  if (!user) {
    return res.status(404).json({
      emailNotFound: 'Email is not registered',
    });
  }

  //Match Password
  bcrypt.compare(password, user.password).then((isMatch) => {
    if (isMatch) {
      //User Matched
      //Create JWT Payload
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      //Sign Token
      jwt.sign(
        payload,
        'secretOrKey',
        {
          expiresIn: 63113852, //2 years in seconds    ‬
        },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer' + ' ' + token,
          });
        }
      );
    } else {
      return res.status(400).json({
        passwordIncorrect: 'Password incorrect',
      });
    }
  });
};
