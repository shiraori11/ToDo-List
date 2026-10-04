import domProjectHandler from "../handler/domProjectHandler.js";
import projectCardView from "../view/projectCardView.js";
import projectHandler from "../handler/projectHandler.js";
import projectModel from "../model/projectModel.js";

function createProject() {
  const projectName = domProjectHandler.getProjectData();
  const newProject = new projectModel(projectName);
  if (!projectHandler.addProject(newProject)) {
    alert("Project already exists!");
  };
};

function displayProject() {
  domProjectHandler.resetProjectList();
  const projectList = projectHandler.getProject();

  for (const project of projectList) {
    domProjectHandler.addProjectCard(projectCardView(project));
  }
}

function projectSubmitFunc() {
  createProject();
  displayProject();
  domProjectHandler.resetProjectForm();
}

function addProjectSubmitFunc() {
  domProjectHandler.addCreateProjectButtonFunc(projectSubmitFunc);
}

export default {
  addProjectSubmitFunc
}
