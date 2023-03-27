const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup.string().trim().min(2).max(64);
const DATE_VALIDATION_SCHEMA = yup
  .string()
  .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in the format YYYY-MM-DD.')
  .test('valid-date', 'Date must be a valid date.', function (value) {
    return !isNaN(Date.parse(value));
  });

module.exports.USER_CREATION_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA.required(),
  lastName: NAME_VALIDATION_SCHEMA.required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/),
});

module.exports.USER_UPDATE_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email(),
  tel: yup
    .string()
    .length(13)
    .matches(/^\+380\d{9}$/),
});

module.exports.USER_GET_PHONE_VALIDATION_SCHEMA = yup.object().shape({
  second_date: DATE_VALIDATION_SCHEMA.required('Second date is required.').test(
    'second-date-greater',
    'Second date must be after the first date.',
    function (value) {
      const { first_date } = this.parent;
      const date1 = new Date(first_date);
      const date2 = new Date(value);
      return date2 >= date1;
    }
  ),
  first_date: DATE_VALIDATION_SCHEMA.required('First date is required.'),
});
