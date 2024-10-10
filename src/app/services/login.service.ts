import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost/thomasapp-api'; 

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{ success: boolean; message?: string; username?: string; email?: string; phoneNumber?: string }> {
    return this.http.post<{ success: boolean; message?: string; username?: string; email?: string; phoneNumber?: string }>(
      `${this.apiUrl}/login.php`,
      { username, password }
    );
  }
}
