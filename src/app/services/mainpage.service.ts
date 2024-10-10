import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {
  private apiUrl = 'http://localhost/thomasapp-api'; // Base URL for your API

  constructor(private http: HttpClient) {}

  getUserInfo(username: string): Observable<{ success: boolean; email: string; phoneNumber: string; message?: string }> {
    return this.http.post<{ success: boolean; email: string; phoneNumber: string; message?: string }>(
      `${this.apiUrl}/userinfo.php`, { username }
    );
  }
}
