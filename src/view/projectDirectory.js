export default function projectDirectory() {
  const projectDirectory = document.createElement("div");

  const projectTaskList = document.createElement("div");
  projectTaskList.classList.add("task-list");

  const test = document.createElement("p");
  test.textContent = "Hello world";

  projectDirectory.append(projectTaskList, test);
  
  return projectDirectory;
}
