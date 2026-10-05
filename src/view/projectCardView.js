export default function projectCard(Project) {
  const projectCardDiv = document.createElement("div");
  projectCardDiv.classList.add("project-card");

  const projectTitle = document.createElement("p");
  projectTitle.textContent = Project.title;

  projectCardDiv.append(projectTitle);

  projectCardDiv.addEventListener("click", () => alert(Project.title));

  return projectCardDiv;
};
