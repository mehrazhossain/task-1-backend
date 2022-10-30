const { getUserService } = require('../services/login.service');

exports.getUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await getUserService(email, password);
    if (!user) {
      return res.status(400).send('Unable to login');
    }

    // Generate auth token
    const token = user.generateAuthToken();
    // Send as header
    // res.header('x-auth-token', token);
    res.cookie('auth', token, {
      httpOnly: true,
      sameSite: true,
      signed: true,
      maxAge: 4 * 60 * 60 * 1000, // 4 hours
    });

    res.status(200).json({
      status: 'successfully logged in',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

exports.userLogout = async (req, res, next) => {
  res.clearCookie('auth');
  res.send('Successfully Logged Out');
};
