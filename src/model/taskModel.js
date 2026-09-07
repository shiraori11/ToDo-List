export default class task{
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  test() {
    console.log(this.title, this.description, this.dueDate, this.priority);
  }
}
