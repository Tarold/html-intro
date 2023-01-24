import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const SINGUP_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
  lastName: yup.string().trim().min(2).max(64).required(),
  displayName: yup.string().trim().min(2).max(64).required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  joinAs: yup.string().required('A radio option is required'),
});

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
