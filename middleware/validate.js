const {
  USER_CREATION_VALIDATION_SCHEMA,
  USER_UPDATE_VALIDATION_SCHEMA,
  USER_GET_PHONE_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateUserOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await USER_CREATION_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUserOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    if (Object.keys(body).length === 0) {
      throw new Error('Update body is empty');
    }
    req.body = await USER_UPDATE_VALIDATION_SCHEMA.validate(body);

    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateUserPhoneDate = async (req, res, next) => {
  const { first_date, second_date } = req.query;
  try {
    if (first_date !== undefined || second_date !== undefined) {
      req.query = await USER_GET_PHONE_VALIDATION_SCHEMA.validate(req.query);
    }
    next();
  } catch (err) {
    next(err);
  }
};
