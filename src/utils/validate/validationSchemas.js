import * as yup from 'yup';

const USER_SCHEMA = yup.object({
  carNumber: yup
    .string()
    .length(8)
    .matches(/^[A-Z][A-Z]/)
    .matches(/[0-9]{4}/)
    .matches(/[A-Z][A-Z]$/),
});

USER_SCHEMA.validate({
  carNumber: 'AA0000AA',
})
  .then((data) => console.log(data))
  .catch((e) => console.log('e :>> ', e));
