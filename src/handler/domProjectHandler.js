const projectForm = document.getElementById("create-project-form");
const mainMenu = document.querySelector("#main-menu");
const projectName = document.getElementById("project-name");
const projectSubmitButton = document.getElementById("create-project-button");

function addCreateProjectButtonFunc(func) {
  projectSubmitButton.addEventListener("click", func);
};

function addProjectCard(projectCard) {
  mainMenu.appendChild(projectCard);
};

function toggleProjectListVisibility() {
  mainMenu.hidden = !mainMenu.hidden;
};

function navigateFromMainMenu(View) {
  mainMenu.appendChild(View);
}

function getProjectData() {
  return projectName.value;
};

function resetProjectList() {
  mainMenu.innerHTML = "";
}

function resetProjectForm() {
  projectForm.reset();
};

export default {
  addCreateProjectButtonFunc,
  addProjectCard,
  getProjectData,
  toggleProjectListVisibility,
  navigateFromMainMenu,
  resetProjectForm,
  resetProjectList
};
