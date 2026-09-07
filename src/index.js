import "./style.css";
import domManipulator from "./scripts/domManipulation.js";
import task from "./model/taskModel.js";
import createTask from "./scripts/createTask.js";

domManipulator.test();

const testTask = new task("title", "desc", "due date", "priority");
testTask.test();
domManipulator.addCreateTaskButtonFunc(createTask);
