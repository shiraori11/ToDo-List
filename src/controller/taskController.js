import domHandler from "../handler/domTaskHandler.js";
import taskHandler from "../handler/taskHandler.js";
import taskCardView from "../view/taskCardView.js";
import taskModel from "../model/taskModel.js";

function createTask() {
  const [title, desc, dueDate, priority] = domHandler.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority);
  taskHandler.createTask(newTask);
};

function displayCurrentTask() {
  domHandler.resetTaskItems();
  const currentTasks = taskHandler.getTasks();

  for (const task of currentTasks) {
    domHandler.addTaskItems(taskCardView(task));
  }
};

function taskButtonFunc() {
  createTask();
  displayCurrentTask();
  domHandler.resetTaskDataInput();
};

function addButtonFunc() {
  domHandler.addCreateTaskButtonFunc(taskButtonFunc);
};

export default {
  addButtonFunc,
  displayCurrentTask
};
