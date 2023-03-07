const { TasksDB } = require('./../models');
const createError = require('http-errors');

module.exports.getTasks = (req, res) => {
  const tasks = TasksDB.getTasks();
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const createdTask = TasksDB.createTask(req.body);
  res.status(201).send(createdTask);
};

module.exports.getTask = (req, res, next) => {
  const { id } = req.params;

  const tasks = TasksDB.getTaskById(id);

  if (tasks) {
    return res.status(200).send(tasks);
  }
  next(createError(404, 'Task Not Found'));
  res.status(200).send(tasks);
};

module.exports.updateTask = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const tasks = TasksDB.updateTask(id, body);

  if (tasks) {
    return res.status(200).send(tasks);
  }
  next(createError(404, 'Task Not Found'));
};

module.exports.removeTask = (req, res) => {
  const {
    params: { id },
  } = req;

  const removedTask = TasksDB.deleteTask(id);

  if (removedTask) {
    return res.status(204).send();
  }
  next(createError(404, 'Task Not Found'));
};
