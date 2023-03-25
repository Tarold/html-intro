const { Router } = require('express');
const { usersController } = require('../controllers/');

const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUsers)
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
