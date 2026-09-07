import createTask from "./createTask.js";

const createTaskButton = document.querySelector("#createTaskButton");

export default {
  test() {
    console.log("test");
  },
  test2() {
    console.log("test2");
  },
  addCreateTaskButtonFunc(func) {
    createTaskButton.addEventListener("click", () => func())
  }
}
