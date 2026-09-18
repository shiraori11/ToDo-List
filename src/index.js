import "./style.css";
import taskModel from "./model/taskModel.js";
import domManagement from "./scripts/domManagement.js";
import tasksManagement from "./scripts/tasks.js";
import displayTask from "./contents/displayTask.js";

function createTask() {
  const [title, desc, dueDate, priority] = domManagement.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority);
  tasksManagement.createTask(newTask);
};

function displayCurrentTask() {
  const currentTasks = tasksManagement.getTasks();

  for (const task of currentTasks) {
    domManagement.addTaskItems(displayTask(task));
  }
};

function taskButtonFunc() {
  createTask();
  displayCurrentTask();
  domManagement.resetTaskDataInput();
}

domManagement.addCreateTaskButtonFunc(taskButtonFunc);









