const { Router } = require('express');
const usersRouter = require('./usersRoures');

const router = Router();

router.use('/users', usersRouter);

module.exports = router;
