const { Router } = require('express');
const { usersController } = require('../controllers');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get((req, res) => res.send('ok'));

usersRouter
  .route('/:id')
  .post(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(() => {});

module.exports = usersRouter;
