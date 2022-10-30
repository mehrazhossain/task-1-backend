const User = require('../models/User');

exports.getUsersService = async () => {
  const users = await User.find({});
  return users;
};

exports.updateUserService = async (id, data) => {
  const response = await User.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return response;
};

exports.deleteUserService = async (id) => {
  const result = await User.deleteOne({ _id: id });
  return result;
};
