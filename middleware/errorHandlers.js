const _ = require('lodash');

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;

  let body = {};

  if (err.errors) {
    body.errors = [];
    Object.keys(err.errors).forEach(err_name => {
      body.errors.push({
        [err_name]: _.omit(err.errors[err_name], ['properties']),
      });
    });
  } else {
    body.type = err.name;
  }
  res.status(status).send({
    status,
    ...body,
    title: err.message,
  });
};
