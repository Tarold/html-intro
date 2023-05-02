const yup = require('yup');

module.exports.EMAIL_VALIDATION_SCHEMA = yup.string().email();

module.exports.PHONE_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required().min(2).max(50),
  brand: yup
    .string()
    .required()
    .oneOf(['Apple', 'Samsung', 'Xiaomi', 'Huawei']),
});
