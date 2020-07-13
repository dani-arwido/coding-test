const User = require('../models').models.User;

exports.register = async (req, res, next) => {
  const {
    pNumber,
    fName,
    lName,
    dobDay,
    dobMonth,
    dobYear,
    gender,
    email,
  } = req.body;
  try {
    if (await _isExist({ pNumber })) {
      res.status(400).json({ message: 'Phone number already registered' });
      return;
    }
    if (await _isExist({ email })) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    const result = await User.create({
      pNumber,
      fName,
      lName,
      dobDay,
      dobMonth,
      dobYear,
      gender,
      email,
    });
    res.json({ message: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

async function _isExist(filter) {
  user = await User.findAll({
    where: filter,
  });
  if (user.length > 0) return true;
  else return false;
}
