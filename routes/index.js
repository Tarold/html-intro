const { Router } = require('express');
const phonesRouter = require('./phonesRouter');

const router = Router();

router.use('/users', phonesRouter);

module.exports = router;
