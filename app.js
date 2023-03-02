const express = require('express');
const app = express();

const { TasksDB, defaultValues } = require('./db');
const DB = new TasksDB(defaultValues);

app
  .use(express.json())
  .get('/tasks', (req, res) => {
    const contacts = DB.getTasks();
    res.status(200).send(contacts);
  })
  .post('/createTask', (req, res) => {
    const createdTask = DB.createTask(req.body);
    res.status(201).send(createdTask);
  });

module.exports = app;
