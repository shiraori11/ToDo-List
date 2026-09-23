const createTaskButton = document.querySelector("#createTaskButton");
const taskListContent = document.querySelector("#task-list");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#duedate");
const taskPriority = document.querySelector("#priority");
const taskForm = document.getElementById("create-task-form");

function addCreateTaskButtonFunc(func) {
  createTaskButton.addEventListener("click", func);
};

function resetTaskDataInput() {
  taskForm.reset();
}

function getTaskData() {
  const title = taskTitle.value;
  const description = taskDescription.value;
  const dueDate = taskDueDate.value;
  const priority = taskPriority.value;
  
  return [title, description, dueDate, priority];
};

function addTaskItems(task) {
  taskListContent.appendChild(task);
}

function resetTaskItems() {
  taskListContent.innerHTML = "";
}

export default {
  addCreateTaskButtonFunc,
  getTaskData,
  resetTaskDataInput,
  addTaskItems,
  resetTaskItems
};

