import { Component } from '@angular/core';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 16.3: Angular Todo';

  userInput:string;
  editInput:string;

  tasks:Task[] = [
    {taskTitle: "Play video games", completed: false},
    {taskTitle: "Work on lab", completed: false},
    {taskTitle: "Take a nap", completed: true},
    {taskTitle: "procrastinate working on lab", completed: true},
    {taskTitle: "Eat Dinner", completed: false},
    {taskTitle: "Buy cat food", completed: false}
  ]

  addTask = function(){
    this.tasks.push({taskTitle:this.userInput, completed: false});
  }

  editTask = function(task:Task){

    task.taskTitle = this.editInput;
  }
  completeTask = function(task:Task) {
    task.completed = !task.completed;
  }

  deleteTask = function(task:Task, index:number){
    this.tasks.splice(index, 1);
  }

  hideCompletedTasks:boolean = false;

  toggleCompletedTasks = () => {
    this.hideCompletedTasks = !this.hideCompletedTasks;
  }

  hideEditBox:boolean = true;

  toggleEditBox = () => {
    this.hideEditBox = !this.hideEditBox;
  }
}
