import "./style.css";
import taskModel from "./model/taskModel.js";
import domManagement from "./scripts/domManagement.js";
import tasksManagement from "./scripts/tasks.js";
import displayTask from "./contents/displayTask.js";

function createTask() {
  const [title, desc, dueDate, priority] = domManagement.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority)
  domManagement.resetTaskDataInput();
  domManagement.addTaskItems(displayTask(newTask));
}

domManagement.addCreateTaskButtonFunc(createTask);









