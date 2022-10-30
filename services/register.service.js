const User = require('../models/User');

exports.registerUserService = async (email) => {
  const register = await User.findOne({ email });
  return register;
};
