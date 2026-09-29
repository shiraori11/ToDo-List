var projectList = [];

function addProject(Project) {
  for (const project of projectList) {
    if (Project.name == project.name) {
       return false;
    }
  }
  projectList.push(Project);
};

function removeProject(Project) {
  projectList = projectList.filter((project) => project.name !== Project.name);
}

function getProject() {
  console.log(projectList);
  return projectList;
}

export default {
  addProject,
  removeProject,
  getProject
}
