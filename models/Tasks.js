const { v4: uuidv4 } = require('uuid');

const defaultValues = [
  {
    id: '0',
    title: 'Test1',
    body: 'Test1',
    createdAt: '2000-12-01',
    isDone: false,
  },
  {
    id: '1',
    title: 'Test2',
    body: 'Test2',
    createdAt: '2000-12-01',
    isDone: false,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      createdAt: Date.now(),
      id: uuidv4(),
      isDone: false,
    });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks () {
    return [...this.tasks];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(c => c.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
      return this.tasks[foundTaskIndex];
    }
    return null;
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstace = new TasksDB(defaultValues);

module.exports = tasksDbInstace;
