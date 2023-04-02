const { Router } = require('express');

const usersRouter = Router();

usersRouter
  .route('/')
  .get(() => {})
  .post(() => {});

usersRouter
  .route('/userId')
  .get(() => {})
  .post(() => {});

module.exports = usersRouter;
