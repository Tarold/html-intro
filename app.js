const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

app.get('/test/:testId/users/:usersId', (req, res) => {
  console.log('req.params :>> ', req.params);
  console.log('req.query :>> ', req.query);
  res.send();
});

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
