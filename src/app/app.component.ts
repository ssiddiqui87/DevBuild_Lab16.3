import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 16.3: Angular Todo';

  userInput: string;
  editInput: string;
  hideCompletedTasks: boolean = false;
  taskFilterText = '';
  searchText: string;
  tasks: Task[] = [
    { taskTitle: "Play video games", completed: false, edit: false },
    { taskTitle: "Work on lab", completed: false, edit: false },
    { taskTitle: "Take a nap", completed: true, edit: false },
    { taskTitle: "procrastinate working on lab", completed: true, edit: false },
    { taskTitle: "Eat Dinner", completed: false, edit: false },
    { taskTitle: "Buy cat food", completed: false, edit: false }
  ]
  tasksCopy;
  addTask = function () {
    this.tasks.push({ taskTitle: this.userInput, completed: false });
    this.userInput = "";
  }

  editTask = function (task: Task) {

    task.taskTitle = this.editInput;
    this.editInput = "";
  }

  toggleEdit = function (): boolean {
    return true;
  }

  completeTask = function (task: Task) {
    task.completed = !task.completed;
  }

  deleteTask = function (task: Task, index: number) {
    this.tasks.splice(index, 1);
  }


  toggleCompletedTasks = function () {
    this.hideCompletedTasks = !this.hideCompletedTasks;
  }

  tasksRemaining = function (): number {
    return this.tasks.filter((task: { completed: any; }) => !task.completed).length;
  }

  // taskSearch = function(search:string):boolean{
  //   return search.toLowerCase().includes(this.taskSearch.toLowerCase());
  // }

}