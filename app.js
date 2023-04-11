const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  const status = err.status ?? 500;

  res.status(status).send({
    errors: [
      {
        status,
        title: err.message ?? 'Server Error',
      },
    ],
  });
});

module.exports = app;

// GET /api/phones
// POST /api/phones
// GET /api/phones/1
// PATCH /api/phones/1
// DELETE /api/phones/1
