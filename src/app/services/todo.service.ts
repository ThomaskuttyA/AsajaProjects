import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost/thomasapp-api'; // Base URL for your API

  constructor(private http: HttpClient) { }

  loadTasks(username: string): Observable<{ tasks: { id: number, taskname: string, status: number }[] }> {
    return this.http.post<{ tasks: { id: number, taskname: string, status: number }[] }>(
      `${this.apiUrl}/gettast.php`, { username }
    );
  }

  addTask(username: string, taskname: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/addtask.php`, { username, taskname }
    );
  }

  changeStatus(taskId: number, newStatus: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/changestatus.php`, { id: taskId, status: newStatus }
    );
  }

  deleteTask(taskId: number): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${this.apiUrl}/deletetask.php`, { id: taskId }
    );
  }
}
