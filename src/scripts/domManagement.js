import tasks from "./tasks.js";

const createTaskButton = document.querySelector("#createTaskButton");
const taskListContent = document.querySelector("#task-list");

function readTasks() {
  const currentTasks = tasks.readTasks();
  console.log(currentTasks);
}

function resetTaskList() {
  taskListContent.innerHTML = "";
}

function appendTaskList(task) {
  taskListContent.appendChild(task);
}

function addCreateTaskButtonFunc(func) {
  createTaskButton.addEventListener("click", () => { func(); resetTaskList(); readTasks() });
} 
export default {
  addCreateTaskButtonFunc,
  appendTaskList
}
