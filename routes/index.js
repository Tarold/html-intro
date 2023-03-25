const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const usersRouter = require('./usersRouter');
const router = Router();

router.use('/users', usersRouter);

router.use('/phones', phonesRouter);

module.exports = router;
