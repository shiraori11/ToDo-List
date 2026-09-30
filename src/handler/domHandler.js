const createTaskButton = document.querySelector("#createTaskButton");
const createProjectButton = document.querySelector("#createProjectButton");
const taskListContent = document.querySelector("#task-list");
const projectListContent = document.querySelector("#project-list");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#duedate");
const taskPriority = document.querySelector("#priority");
const taskForm = document.getElementById("create-task-form");
const projectName = document.getElementById("project-name");

function addCreateTaskButtonFunc(func) {
  createTaskButton.addEventListener("click", func);
};

function addCreateProjectButtonFunc(func) {
  createProjectButton.addEventListener("click", func);
}

function toggleTaskListVisibility() {
  taskListContent.hidden = !taskListContent.hidden;
}

function toggleProjectListVisibility() {
  projectListContent.hidden = !projectListContent.hidden;
}

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

function getProjectData() {
  const name = projectName.value;

  return name;
};

function addTaskItems(task) {
  taskListContent.appendChild(task);
}

function resetTaskItems() {
  taskListContent.innerHTML = "";
}

export default {
  addCreateTaskButtonFunc,
  addCreateProjectButtonFunc,
  getTaskData,
  getProjectData,
  resetTaskDataInput,
  addTaskItems,
  resetTaskItems,
  toggleTaskListVisibility,
  toggleProjectListVisibility,
};

