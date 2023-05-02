module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;

  let body = {};

  if (err.name) {
    body.name = err.name;
  }

  res.status(status).send({
    errors: [
      {
        status,
        ...body,
        title: err,
      },
    ],
  });
};
