import task from "../model/taskModel.js";

export default function createTask() {
  const testTask = new task("title", "desc", "due date", "priority");
  console.log(testTask);
};
