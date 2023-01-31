import * as yup from 'yup';

export const TODO_VALIDATION_SCHEMA = yup.object({
  task: yup.string().trim().min(1).max(64).required('Todo cannot be empty'),
});
