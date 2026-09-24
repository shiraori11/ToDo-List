var taskList = [];

function createTask(Task) {
  console.log(Task);
  taskList.push(Task);
};

function removeTask(Task) {
  taskList = taskList.filter((task) => task !== Task);
}

function getTasks() {
  console.log(taskList);
  return taskList;
}

export default {
  createTask,
  getTasks,
  removeTask
}
