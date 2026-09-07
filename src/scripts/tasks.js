import task from "../model/taskModel.js";

const taskList = [];

function createTask() {
  const testTask = new task("title", "desc", "due date", "priority");
  console.log(testTask);
  taskList.push(testTask);
};

function readTasks() {
  return taskList;
}

export default {
  createTask,
  readTasks
}
