import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost/thomasapp-api'; // Base URL for your API

  constructor(private http: HttpClient) { }

  register(username: string, password: string, email: string, mobile: string): Observable<{ success: boolean; message?: string }> {
    return this.http.post<{ success: boolean; message?: string }>(
      `${this.apiUrl}/register.php`,
      { username, password, email, mobile }
    );
  }
}
