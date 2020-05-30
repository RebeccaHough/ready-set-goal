import { Component, Input, Output, EventEmitter } from '@angular/core';
import Task from 'src/app/classes/task.class';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();
  public reorderMode: boolean = false;

  constructor() {}
  
  /**
   * Forward this task to parent component for deletion
   */
  deleteThisTask() {
    this.delete.emit(this.task);
  }

  addSubTask() {
    if(!this.task.subtasks) 
      this.task.subtasks = [];
    this.task.subtasks.push(new Task("New subtask"));
  }

  /**
   * Receive on (delete) event emit
   */
  deleteChildTask(childTask: Task) {
    console.log(this.task.subtasks)
    this.task.subtasks.splice(this.task.subtasks.indexOf(childTask), 1);
    console.log(this.task.subtasks)
  }

  /**
   * Toggle mode for moving/reordering tasks
   */
  toggleReorderMode() {
    this.reorderMode = !this.reorderMode;
    return this.reorderMode;
  }

  hasChildTasks(): boolean {
    console.log(!!this.task.subtasks)
    return !!this.task.subtasks; //lazy
  }

}
