export default class task{
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  taskCompleted() {
    this.completed = true;
    console.log(this);
  }

  deleteTask() {
    delete this;
  }
}
