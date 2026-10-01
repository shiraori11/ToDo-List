const createTaskButton = document.querySelector("#createTaskButton");
const createProjectButton = document.querySelector("#createProjectButton");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#duedate");
const taskPriority = document.querySelector("#priority");
const taskForm = document.getElementById("create-task-form");
const taskListContent = document.querySelector("#task-list");

function addCreateTaskButtonFunc(func) {
  createTaskButton.addEventListener("click", func);
};

function getTaskData() {
  const title = taskTitle.value;
  const description = taskDescription.value;
  const dueDate = taskDueDate.value;
  const priority = taskPriority.value;
  
  return [title, description, dueDate, priority];
};

function addTaskItems(task) {
  taskListContent.appendChild(task);
};

function resetTaskItems() {
  taskListContent.innerHTML = "";
};

function toggleTaskListVisibility() {
  taskListContent.hidden = !taskListContent.hidden;
};

export default {
  addCreateTaskButtonFunc,
  getTaskData,
  resetTaskDataInput,
  addTaskItems,
  resetTaskItems,
  toggleTaskListVisibility,
};
