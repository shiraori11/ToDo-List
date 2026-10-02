import domTaskHandler from "../handler/domTaskHandler.js";
import taskHandler from "../handler/taskHandler.js";
import taskCardView from "../view/taskCardView.js";
import taskModel from "../model/taskModel.js";

function createTask() {
  const [title, desc, dueDate, priority] = domTaskHandler.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority);
  taskHandler.createTask(newTask);
};

function displayCurrentTask() {
  domTaskHandler.resetTaskItems();
  const currentTasks = taskHandler.getTasks();

  for (const task of currentTasks) {
    domTaskHandler.addTaskCard(taskCardView(task));
  }
};

function taskButtonFunc() {
  createTask();
  displayCurrentTask();
  domTaskHandler.resetTaskDataInput();
};

function addButtonFunc() {
  domTaskHandler.addCreateTaskButtonFunc(taskButtonFunc);
};

export default {
  addButtonFunc,
  displayCurrentTask
};
