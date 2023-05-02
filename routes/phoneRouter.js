const { Router } = require('express');
const { phoneController } = require('../controller');

const userRouter = Router();

userRouter
  .route('/')
  .get(phoneController.getPhones)
  .post(phoneController.createPhone);

userRouter
  .route('/:phoneId')
  .get(phoneController.getPhoneById)
  .patch(phoneController.updatePhoneById)
  .delete(phoneController.deletePhoneById);

module.exports = userRouter;
