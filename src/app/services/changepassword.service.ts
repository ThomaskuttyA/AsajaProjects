import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  private apiurl = 'http://localhost/thomasapp-api';

  constructor(private http: HttpClient) {}

    changepassword(password: string): Observable < { success: boolean; message?: string } > {
      return this.http.post<{ success: boolean; message?: string }>(
        `${this.apiurl}/changepassword.php`,
        { password }
      );
    }
  }

