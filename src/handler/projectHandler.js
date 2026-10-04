var projectList = [];

function addProject(Project) {
  for (const project of projectList) {
    if (Project.title == project.title) {
       return false;
    }
  }
  projectList.push(Project);
  return true;
};

function removeProject(Project) {
  projectList = projectList.filter((project) => project.title !== Project.title);
}

function getProject() {
  return projectList;
}

export default {
  addProject,
  removeProject,
  getProject
}
