const taskService = require('../services/taskService');
const taskView = require('../views/taskView');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    taskView.showAllTasks(res, tasks);
  } catch (error) {
    taskView.showError(res, error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const newTask = await taskService.createTask(title);
    taskView.showCreatedTask(res, newTask);
  } catch (error) {
    taskView.showError(res, error);
  }
};

module.exports = {
  getAllTasks,
  createTask
};
