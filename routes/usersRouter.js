const { Router } = require('express');
const { usersController } = require('../controllers');
const { paginate, validate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(validate.validateUserOnCreate, usersController.createUser)
  .get(paginate.paginateUser, usersController.getUsers);

usersRouter
  .route('/:userId')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;
