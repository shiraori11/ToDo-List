export default function displayTask(Task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList = "task-card";

  taskDiv.innerHTML = `
    <p>${Task.title}</p>
    <p>${Task.description}</p>
    <p>${Task.dueDate}</p>
    <p>${Task.priority}</p>
  `

  return taskDiv;
}

