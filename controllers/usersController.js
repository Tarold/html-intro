module.exports.createUsers = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUsers = await Users.create(body);
    res.status(201).send(createdUsers);
  } catch (err) {
    next(err);
  }
};
module.exports.deleteUser = async () => {};
