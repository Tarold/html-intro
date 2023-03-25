const { Router } = require('express');

const usersRouter = Router();

usersRouter
  .route('/')
  .post(() => {})
  .delete(() => {})
  .get((req, res) => {
    res.status(200).send('OK');
  });

usersRouter
  .route('/:id')
  .post(() => {})
  .delete(() => {})
  .get((req, res) => {
    res.status(200).send('OK');
  });

module.exports = usersRouter;
