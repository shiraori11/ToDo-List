export default function displayTask(Task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList = "task-card";

  taskDiv.innerHTML = `
    <p>${Task.title}</p>
    <p>${Task.description}</p>
    <p>${Task.dueDate}</p>
    <p>${Task.priority}</p>
  `;

  const testButton = document.createElement("button");
  testButton.textContent = "Finish";
  testButton.addEventListener("click", () => Task.taskCompleted())
  
  taskDiv.appendChild(testButton);

  return taskDiv;
};


