module.exports.paginateUser = (req, res, next) => {
  const { page = 1, results = 5 } = req.query;

  const limit = results;
  const offset = (page - 1) * results;

  req.pagination = { limit, offset };
  next();
};
