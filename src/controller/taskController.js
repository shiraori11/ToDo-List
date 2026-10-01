function createTask(domHandler, taskModel, taskHandler) {
  const [title, desc, dueDate, priority] = domHandler.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority);
  taskHandler.createTask(newTask);
};

function displayCurrentTask(domHandler, taskHandler, taskCardView) {
  domHandler.resetTaskItems();
  const currentTasks = taskHandler.getTasks();

  for (const task of currentTasks) {
    domHandler.addTaskItems(taskCardView(task));
  }
};

function taskButtonFunc(taskModel, taskHandler, domHandler, taskCardView) {
  createTask(domHandler, taskModel, taskHandler);
  displayCurrentTask(domHandler, taskHandler, taskCardView);
  domHandler.resetTaskDataInput();
}

export default {
  taskButtonFunc
}
