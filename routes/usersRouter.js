const { Router } = require('express');
const usersRouter = Router();
const { usersController } = require('./../controllers');
const multer = require('multer');
const { STATIC_PATH } = require('../constants');

// POST /api/users body
// GET /api/users?limit=10&offset=0 (query)

// GET /api/users/1 (params)
//  /api/users/:userId
// PATCH /api/users/1 body (params)
// PUT /api/users/1 body (params)
// DELETE /api/users/1 (params)
usersRouter
  .route('/')
  .post(usersController.createUser)
  .get(usersController.getUsers);

usersRouter
  .route('/:userId')
  .get(usersController.getUserById)
  .patch(usersController.updateUserById)
  .put(usersController.updateOrCreateUserById, usersController.createUser)
  .delete(usersController.deleteUserById);

usersRouter.get('/:userId/tasks', usersController.getUserTasks);

const upload = multer({ dest: STATIC_PATH });

usersRouter.patch('/:userId/images', upload.single('userPhoto'));

module.exports = usersRouter;
