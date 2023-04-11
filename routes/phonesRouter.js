const { Router } = require('express');
const phonesRouter = Router();
const { phonesController } = require('../controllers');

// POST /api/users body
// GET /api/users?limit=10&offset=0 (query)

// GET /api/users/1 (params)
//  /api/users/:userId
// PATCH /api/users/1 body (params)
// PUT /api/users/1 body (params)
// DELETE /api/users/1 (params)
phonesRouter
  .route('/')
  .get(phonesController.getPhones)
  .post(phonesController.createPhone);
phonesRouter
  .route('/:userId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById)
  .put(phonesController.updateOrCreatePhoneById, phonesController.createPhone);

module.exports = phonesRouter;
