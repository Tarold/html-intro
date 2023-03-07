const express = require('express');

const { validate, errorHandlers } = require('./middleware');
const { tasksController } = require('./controllers');

const app = express();

app
  .use(express.json())
  .get('/tasks', tasksController.getTasks)
  .post(
    '/createTask',
    validate.validateTaskOnCreate,
    tasksController.createTask
  )
  .get('/task/:id', tasksController.getTask)
  .patch('/task/:id', validate.validateTaskOnUpdate, tasksController.updateTask)
  .delete('/task/:id', tasksController.removeTask)
  .use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

module.exports = app;
