export default function projectCard(Project) {
  const projectCardDiv = document.createElement("div");

  const projectTitle = document.createElement("p");
  projectTitle.textContent = Project.title;

  projectCardDiv.append(projectTitle);
};
