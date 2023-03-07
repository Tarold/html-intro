const express = require('express');

// const { validate, errorHandlers } = require('./middleware');
const { tasksController } = require('./controllers');

const app = express();

app
  .use(express.json())
  .get('/tasks', tasksController.getTasks)
  .post('/createTask', tasksController.createTask)
  .get('/task/:id', tasksController.getTask)
  .patch('/task/:id', tasksController.updateTask)
  .delete('/task/:id', tasksController.removeTask);

module.exports = app;
