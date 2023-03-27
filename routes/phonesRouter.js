const { Router } = require('express');
const { phonesController } = require('../controllers');
const { paginate } = require('../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(paginate.paginatePhones, phonesController.getPhones);

module.exports = phonesRouter;
