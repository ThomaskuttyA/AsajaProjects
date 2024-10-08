import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  success: boolean;
  message?: string;
  username?: string; // Optional for login
}

@Injectable({
  providedIn: 'root'
})
export class Thomasservice {
  private baseUrl = 'http://localhost/thomasapp-api';

  constructor(private http: HttpClient) {}

  // Method for user registration
  register(username: string, password: string): Observable<AuthResponse> {
    const payload = { username, password };
    return this.http.post<AuthResponse>(`${this.baseUrl}/register.php`, payload);
  }

  // Method for user login
  login(username: string, password: string): Observable<AuthResponse> {
    const payload = { username, password };
    return this.http.post<AuthResponse>(`${this.baseUrl}/login.php`, payload);
  }
}
