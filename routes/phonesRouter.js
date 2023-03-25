const { Router } = require('express');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(() => {})
  .delete(() => {})
  .get((req, res) => {
    res.status(200).send('OK');
  });

module.exports = phonesRouter;
