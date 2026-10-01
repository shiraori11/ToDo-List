import "./style.css";
import taskModel from "./model/taskModel.js";
import taskController from "./controller/taskController.js";

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
taskController.addButtonFunc();
