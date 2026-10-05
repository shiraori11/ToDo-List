const projectForm = document.getElementById("create-project-form");
const projectListContent = document.querySelector("#project-list");
const projectName = document.getElementById("project-name");
const projectSubmitButton = document.getElementById("create-project-button");

function addCreateProjectButtonFunc(func) {
  projectSubmitButton.addEventListener("click", func);
};

function addProjectCard(projectCard) {
  projectListContent.appendChild(projectCard);
};

function toggleProjectListVisibility() {
  projectListContent.hidden = !projectListContent.hidden;
};

function getProjectData() {
  return projectName.value;
};

function resetProjectList() {
  projectListContent.innerHTML = "";
}

function resetProjectForm() {
  projectForm.reset();
};

export default {
  addCreateProjectButtonFunc,
  addProjectCard,
  getProjectData,
  toggleProjectListVisibility,
  resetProjectForm,
  resetProjectList
};
