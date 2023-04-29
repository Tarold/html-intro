const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Connection OK');

    const taskSchema = new mongoose.Schema({ value: String });
    const Task = mongoose.model('Task', taskSchema);

    const testTask = { value: 'ToDo HW' };

    // const createdTask = await Task.create(testTask);
  } catch (err) {
    console.log('err :>> ', err);
  }
})();
