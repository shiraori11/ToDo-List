import "./style.css";
import domManipulator from "./scripts/domManipulation.js";
import task from "./model/taskModel.js";

domManipulator.test();

const testTask = new task("title", "desc", "due date", "priority");
testTask.test();
