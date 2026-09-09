const createTaskButton = document.querySelector("#createTaskButton");
const taskListContent = document.querySelector("#task-list");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#duedate");
const taskPriority = document.querySelector("#priority");

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

export default {
  addCreateTaskButtonFunc,
  getTaskData
};

