const showAllTasks = (res, tasks) => {
  res.status(200).json({ tasks });
};

const showCreatedTask = (res, task) => {
  res.status(201).json({ task });
};

const showError = (res, error) => {
  res.status(500).json({ error: error.message });
};

module.exports = {
  showAllTasks,
  showCreatedTask,
  showError
};
