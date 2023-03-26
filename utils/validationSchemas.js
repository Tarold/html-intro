const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup.string().min(2).max(64).required();

module.exports.USER_CREATION_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email().required(),
  tel: yup.string().length(13).required(),
});
