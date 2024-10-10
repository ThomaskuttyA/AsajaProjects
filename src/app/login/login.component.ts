import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        // Store user details in localStorage
        localStorage.setItem('username', response.username!);
        localStorage.setItem('email', response.email!);
        localStorage.setItem('phoneNumber', response.phoneNumber!);

        // Navigate to the main page
        this.router.navigate(['/mainpage']);

        // Optionally, reset the form here
        this.username = '';
        this.password = '';
      } else {
        this.errorMessage = response.message || 'Login failed. Please try again.';
        alert(this.errorMessage); // Show error alert
      }
    }, error => {
      this.errorMessage = 'Error during login. Please try again.';
      alert(this.errorMessage); // Show error alert
      console.error('Error during login:', error);
    });
  }
}
