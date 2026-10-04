export default class Project {
  constructor(title) {
    this.title = title;
    this.listOfProject = [];
  }

  addTaskToProject(Task) {
    this.listOfProject.append(Task);
  }

  getTaskList() {
    return this.listOfProject;
  }
}
