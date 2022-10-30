const User = require('../models/User');

exports.loginUserService = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
