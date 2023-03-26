const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const usersRouter = require('./usersRouter');

const router = Router();

// /api/users
router.use('/users', usersRouter);

// /api/phones
router.use('/phones', phonesRouter);

//endpoints
// get /api/users?page=1&results=5 - admin
// get /api/users/1                - user
// post /api/users                 - user
// patch /api/users/1              - user
// delete /api/users/1             - user
// get /api/users/1/phones?page=1&results=5 - user

// get /phones?page=1&results=5 - user
// ... admin

module.exports = router;
