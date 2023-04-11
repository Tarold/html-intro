const { Router } = require('express');
const phonesRouter = Router();
const { phonesController } = require('../controllers');

// POST /api/phones body
// GET /api/phones?limit=10&offset=0 (query)

// GET /api/phones/1 (params)
//  /api/phones/:phoneId
// PATCH /api/phones/1 body (params)
// PUT /api/phones/1 body (params)
// DELETE /api/phones/1 (params)
phonesRouter
  .route('/')
  .get(phonesController.getPhones)
  .post(phonesController.createPhone);
phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById)
  .put(phonesController.updateOrCreatePhoneById, phonesController.createPhone);

module.exports = phonesRouter;
