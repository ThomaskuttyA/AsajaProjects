import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface LoginResponse {
  success: boolean;
  username?: string;
  message?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.loading = true; // Start loading
    this.errorMessage = ''; // Reset error message

    const payload = { username: this.username, password: this.password };

    this.http.post<LoginResponse>('http://localhost/thomasapp-api/login.php', payload)
      .subscribe(response => {
        this.loading = false; // Stop loading
        if (response && response.success) {
          this.userService.setUsername(response.username!);
          this.router.navigate(['/main']);
        } else {
          this.errorMessage = response.message || 'Login failed. Please try again.'; // Set error message
        }
      }, error => {
        this.loading = false; // Stop loading
        this.errorMessage = 'An error occurred during login. Please try again later.';
      });
  }
}
