import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const payload = { username: this.username, password: this.password };
    this.http.post<{ success: boolean, message?: string, username?: string }>('http://localhost/thomasapp-api/login.php', payload)
      .subscribe(response => {
        if (response.success) {
          this.router.navigate(['/mainpage']);
          //alert(`Login successful! Welcome, ${response.username}!`);
          // Optionally, reset the form here
          this.username = '';
          this.password = '';
          
        } else {
          this.errorMessage = response.message || 'Login failed. Please try again.';
          alert(this.errorMessage); // Show error alert
        }
      }, error => {
        this.errorMessage = 'Error during login. Please try again.';
        //alert(this.errorMessage); // Show error alert
        //console.error('Error during login:', error);
      });
  }

}


