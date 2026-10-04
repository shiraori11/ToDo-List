const createTaskButton = document.querySelector("#create-task-button");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#duedate");
const taskPriority = document.querySelector("#priority");
const taskForm = document.getElementById("create-task-form");
const taskListContent = document.querySelector("#task-list");

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

function addTaskCard(taskCard) {
  taskListContent.appendChild(taskCard);
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
  addTaskCard,
  resetTaskItems,
  toggleTaskListVisibility,
};
