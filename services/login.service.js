const User = require('../models/User');

exports.getUserService = async (email, password) => {
  const user = await User.findOne({ email, password });
  return user;
};
