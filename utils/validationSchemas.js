const yup = require('yup');

const TITLE_VALIDATION_SCHEMA = yup.string().trim().min(2).max(64);
const BODY_VALIDATION_SCHEMA = yup.string().trim().min(2).max(64);

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA.required(),
  body: BODY_VALIDATION_SCHEMA.required(),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  title: TITLE_VALIDATION_SCHEMA,
  body: BODY_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});
