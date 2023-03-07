const { TasksDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const contacts = TasksDB.getTasks();
  res.status(200).send(contacts);
};

module.exports.createTask = (req, res) => {
  const createdTask = TasksDB.createTask(req.body);
  res.status(201).send(createdTask);
};

module.exports.getTask = (req, res) => {
  const { id } = req.params;

  const contacts = TasksDB.getTaskById(id);
  res.status(200).send(contacts);
};

module.exports.updateTask = (req, res) => {
  const {
    params: { id },
    body,
  } = req;
  console.log('body :>> ', body);
  const contacts = TasksDB.updateTask(id, body);
  res.status(200).send(contacts);
};

module.exports.removeTask = (req, res) => {
  const {
    params: { id },
  } = req;

  const removedTask = TasksDB.deleteTask(id);
  res.status(204).send(removedTask);
};
