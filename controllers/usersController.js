const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    res.status(201).send(createdUser);
  } catch (err) {
    next(err);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const { pagination } = req;
  try {
    const allUsers = await User.getAll(pagination);
    res.status(200).send(allUsers);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const { params } = req;

  try {
    const deletedUser = await User.deleteById(params);
    if (deletedUser) {
      return res.status(204).send();
    }

    res.status(404).send('User Not Found');
  } catch (err) {
    next(err);
  }
};
