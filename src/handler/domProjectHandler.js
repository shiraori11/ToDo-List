const projectListContent = document.querySelector("#project-list");
const projectName = document.getElementById("project-name");

function addCreateProjectButtonFunc(func) {
  createProjectButton.addEventListener("click", func);
}

function toggleProjectListVisibility() {
  projectListContent.hidden = !projectListContent.hidden;
}

function resetTaskDataInput() {
  taskForm.reset();
}

function getProjectData() {
  const name = projectName.value;

  return name;
};


export default {
  addCreateTaskButtonFunc,
  addCreateProjectButtonFunc,
  getTaskData,
  getProjectData,
  resetTaskDataInput,
  addTaskItems,
  resetTaskItems,
  toggleTaskListVisibility,
  toggleProjectListVisibility,
};
