const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Connection OK');

    const taskSchema = new mongoose.Schema({ value: String });
    const Task = mongoose.model('Task', taskSchema);

    const testTask = { value: 'ToDo HW' };

    // const createdTask = await Task.create(testTask);
    // Task.find
    const foundTasks = await Task.find();
    console.log('foundTasks :>> ', foundTasks);

    // Task.findById
    const foundTask = await Task.findById('644d468db277a42265e9d3ce');
    console.log('foundTask :>> ', foundTask);

    // Task.findByIdAndUpdate
    const updatedTask = await Task.findByIdAndUpdate(
      '644d468db277a42265e9d3ce',
      { value: 'Rest' },
      { new: true }
    );
    console.log('updatedTask :>> ', updatedTask);

    // Task.findByIdAndDelete
    const deletedTask = await Task.findByIdAndDelete(
      '644d468db277a42265e9d3ce'
    );
    console.log('deletedTask :>> ', deletedTask);
  } catch (err) {
    console.log('err :>> ', err);
  }
})();
