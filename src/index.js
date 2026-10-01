import "./style.css";
import taskModel from "./model/taskModel.js";
// import projectModel from "./model/projectModel.js";
import domHandler from "./handler/domHandler.js";
import taskHandler from "./handler/taskHandler.js";
import taskController from "./controller/taskController.js";
import taskCardView from "./view/taskCardView.js";

// function displayProject(Project) {
//   const projectDiv = document.createElement("div");
//
//   projectDiv.innerHTML = `
//     <p>${Project.name}</p>
//   `;
// }
//
// function testDelete(Task){
//   tasksManagement.removeTask(Task);
//   displayCurrentTask();
// };
//
//
// function createProject() {
//   const projectName = domManagement.getProjectData();
//   const newProject = new projectModel(projectName);
// }
domHandler.addCreateTaskButtonFunc(() => taskController.taskButtonFunc(taskModel, taskHandler, domHandler, taskCardView));
