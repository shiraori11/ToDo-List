import "./style.css";
import domManagement from "./scripts/domManagement.js";
import tasksManagement from "./scripts/tasks.js";


function createTask() {
  const [title, desc, dueDate, priority] = domManagement.getTaskData();
  tasksManagement.createTask(title, desc, dueDate, priority);
}
domManagement.addCreateTaskButtonFunc(createTask);









