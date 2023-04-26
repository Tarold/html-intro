const { Router } = require('express');
const { tasksController } = require('../controllers');

const tasksRouter = Router();

tasksRouter
  .route('/')
  .get(tasksController.getTasks)
  .post(tasksController.createTask);

//TODO модернізувати основний сайт
//або завдання окремою сторінкою, або як вспливаючий елмент
tasksRouter
  .route('/:taskId')
  .get(tasksController.getTaskById)
  .patch(tasksController.updateTaskById)
  .put(tasksController.updateOrCreateTaskById, tasksController.createTask)
  .delete(tasksController.deleteTaskById);

module.exports = tasksRouter;
