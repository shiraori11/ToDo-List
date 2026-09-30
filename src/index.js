import "./style.css";
import taskModel from "./model/taskModel.js";
impore projectModel from "./model/projectModel.js";
import domManagement from "./controller/domManagement.js";
import tasksManagement from "./controller/tasks.js";

function displayTask(Task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList = "task-card";

  taskDiv.innerHTML = `
    <p>${Task.title}</p>
    <p>${Task.description}</p>
    <p>${Task.dueDate}</p>
    <p>${Task.priority}</p>
  `;

  const testButton = document.createElement("button");
  testButton.textContent = "Finish";
  testButton.addEventListener("click", () => testDelete(Task));
  
  taskDiv.appendChild(testButton);

  return taskDiv;
};

function displayProject(Project) {
  const projectDiv = document.createElement("div");

  projectDiv.innerHTML = `
    <p>${Project.name}</p>
  `;
}

function testDelete(Task){
  tasksManagement.removeTask(Task);
  displayCurrentTask();
};

function createTask() {
  const [title, desc, dueDate, priority] = domManagement.getTaskData();
  const newTask = new taskModel(title, desc, dueDate, priority);
  tasksManagement.createTask(newTask);
};

function createProject() {
  const projectName = domManagement.getProjectData();
  const newProject = new projectModel(projectName);
  
}

function displayCurrentTask() {
  domManagement.resetTaskItems();
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
