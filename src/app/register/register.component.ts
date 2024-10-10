import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service'; // Adjust the path as necessary

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  mobile: string = '';
  errorMessage: string = '';

  constructor(private registerService: RegisterService, private router: Router) {}

  register() {
    this.registerService.register(this.username, this.password, this.email, this.mobile).subscribe(response => {
      if (response.success) {
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']); // Redirect to login after successful registration
      } else {
        this.errorMessage = response.message || 'Registration failed. Please try again.';
        alert(this.errorMessage); // Show error alert
      }
    }, error => {
      this.errorMessage = 'Error during registration. Please try again.';
      alert(this.errorMessage); // Show error alert
      console.error('Error during registration:', error);
    });
  }
}
