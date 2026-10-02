const projectListContent = document.querySelector("#project-list");
const projectName = document.getElementById("project-name");

function addCreateProjectButtonFunc(func) {
  createProjectButton.addEventListener("click", func);
}

function addProjectCard(projectCard) {
  projectListContent.appendChild(projectCard);
};

function toggleProjectListVisibility() {
  projectListContent.hidden = !projectListContent.hidden;
};

function getProjectData() {
  return projectName.value;
};

export default {
  addCreateProjectButtonFunc,
  addProjectCard,
  getProjectData,
  toggleProjectListVisibility,
};
