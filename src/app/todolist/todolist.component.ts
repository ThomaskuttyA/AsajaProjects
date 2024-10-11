import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service'; // Adjust the path as necessary

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  username: string | null = '';
  taskname: string = '';
  tasks: { id: number, taskname: string, status: number }[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.loadTasks(); // Load tasks when the component initializes
  }

  loadTasks() {
    this.todoService.loadTasks(this.username!).subscribe(
      response => {
        this.tasks = response.tasks;
      },
      error => {
        console.error('Error loading tasks', error);
      }
    );
  }

  addtask() {
    if (!this.taskname) {
      console.error("Task name is empty!");
      return; // Prevent sending empty task name
    }

    this.todoService.addTask(this.username!, this.taskname).subscribe(
      response => {
        if (response.success) {
          console.log('Task added!', response.message);
          this.taskname = ''; // Clear input field
          this.loadTasks(); // Reload tasks after adding a new one
        } else {
          console.error('Error adding task', response.message);
        }
      },
      error => {
        console.error('HTTP error', error);
      }
    );
  }

  changeStatus(index: number) {
    const taskId = this.tasks[index].id;
    const newStatus = this.tasks[index].status === 0 ? 1 : 0; // Toggle status

    this.todoService.changeStatus(taskId, newStatus).subscribe(
      response => {
        if (response.success) {
          console.log('Status changed!', response.message);
          // Update the status in the local array
          this.tasks[index].status = newStatus;
        } else {
          console.error('Error changing status', response.message);
        }
      },
      error => {
        console.error('HTTP error', error);
      }
    );
  }

  deleteTask(index: number) {
    const taskId = this.tasks[index].id; // Get task ID for deletion

    this.todoService.deleteTask(taskId).subscribe(
      response => {
        if (response.success) {
          console.log('Task deleted!', response.message);
          this.loadTasks(); // Reload tasks after deletion
        } else {
          console.error('Error deleting task', response.message);
        }
      },
      error => {
        console.error('HTTP error', error);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  gotohome(){
    this.router.navigate(['/home']);
  }



}
