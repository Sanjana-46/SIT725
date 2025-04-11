const Task = require('../models/taskModel');

const getAllTasks = async () => {
  return await Task.find();
};

const createTask = async (title) => {
  const task = new Task({ title });
  return await task.save();
};

module.exports = {
  getAllTasks,
  createTask
};
