import * as yup from 'yup';
import { startOfToday } from 'date-fns';
import CONSTANTS from '../../constants';

const { GENDERS } = CONSTANTS;

// TASK password regexp

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64)
  .matches(/^[A-Z][a-z]+$/)
  .required();

export const USER_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VALIDATION_SCHEMA,
  lastName: NAME_VALIDATION_SCHEMA,
  email: yup.string().email().required(),
  passwordHash: yup.string().required(),
  birthday: yup.date().max(new Date()),
  gender: yup.string().oneOf(GENDERS),
  userPhoto: yup.mixed(),
});

export const TASK_VALIDATION_SCHEMA = yup.object({
  body: yup.string().trim().min(1).max(64).required('Task cannot be empty'),
  deadline: yup
    .date()
    .min(startOfToday(), 'Date must be today or later')
    .required('Date cannot be empty'),
});
