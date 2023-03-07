const { v4: uuidv4 } = require('uuid');

const defaultValues = [
  {
    id: 0,
    title: 'Test1',
    body: 'Test1',
    createdAt: '2000-12-01',
    isDone: false,
  },
  {
    id: 1,
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

  // Метод для додавання нового об'єкта в масив: додає id і isFavourite
  createTask (newTask) {
    this.tasks.push({
      ...newTask,
      createdAt: Date.now(),
      id: uuidv4(),
      isDone: false,
    });
    return this.tasks[this.tasks.length - 1];
  }

  // Метод для отримання даних з масиву
  getTasks () {
    return [...this.tasks];
  }
}

exports.TasksDB = TasksDB;
exports.defaultValues = defaultValues;
