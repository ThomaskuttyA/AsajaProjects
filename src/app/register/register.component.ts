import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface RegisterResponse {
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const payload = { username: this.username, password: this.password };
    console.log('Sending registration data:', payload);
    this.http.post<RegisterResponse>('http://localhost/thomasapp-api/register.php', payload)
      .subscribe(response => {
        console.log(response);
        if (response && response.success) {
          this.goToLogin();
        } else {
          console.error('Registration failed:', response.message);
        }
      }, error => {
        console.error('Error during registration:', error);
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
