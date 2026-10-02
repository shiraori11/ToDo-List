import "./style.css";
import taskController from "./controller/taskController.js";
import projectController from "./controller/projectController.js";

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
taskController.addButtonFunc();
projectController.addProjectSubmitFunc();
