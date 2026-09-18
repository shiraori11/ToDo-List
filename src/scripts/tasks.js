const taskList = [];

function createTask(Task) {
  console.log(Task);
  taskList.push(Task);
};

function getTasks() {
  return taskList;
}

export default {
  createTask,
  getTasks
}
