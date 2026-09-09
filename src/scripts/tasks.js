import task from "../model/taskModel.js";

const taskList = [];

function createTask(title, desc, dueDate, priority) {
  const testTask = new task(title, desc, dueDate, priority);
  console.log(testTask);
  taskList.push(testTask);
};

function getTasks() {
  return taskList;
}

export default {
  createTask,
  getTasks
}
