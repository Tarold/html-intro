const express = require('express');
const app = express();

const { TasksDB, defaultValues } = require('./db');
const DB = new TasksDB(defaultValues);

app
  .use(express.json())
  .get('/tasks', (req, res) => {
    res.send(DB.getTasks());
  })
  .post('/createTask', (req, res) => {
    res.send(DB.createTask(req.body));
  });

module.exports = app;
