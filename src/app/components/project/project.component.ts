import { Component } from '@angular/core';
import Project from 'src/app/classes/project.class';
import Task from 'src/app/classes/task.class';
import Goal from 'src/app/classes/goal.class';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: [
    './project.component.scss',
    '../../app.component.scss'
  ] //todo this is awful

})
export class ProjectComponent {
  project: Project

  constructor() {
    this.project = new Project("New project");
    if(!this.project.goals) this.project.goals = [];
    this.project.goals.push(new Goal("New goal"));
   }

  addTask() {
      if(!this.project.goals[0].tasks) this.project.goals[0].tasks = [];
      this.project.goals[0].tasks.push(new Task("New task"));
  }
  addSubtask() {}
  deleteTask(task: Task) {
      console.log(task)
      this.project.goals[0].tasks.splice(this.project.goals[0].tasks.indexOf(task), 1);
  }
  deleteSubTask() {}
  markTaskComplete() {}
  saveUrl() {}

}
