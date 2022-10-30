const {
  getUsersService,
  updateUserService,
  deleteUserService,
} = require('../services/user.service');

exports.getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService();

    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const response = await updateUserService(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'User update failed',
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't delete the user",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted the user',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Couldn't delete the user",
      error: error.message,
    });
  }
};
