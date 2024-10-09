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
  mobile:string='';
  email:string='';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.loading = true; // Start loading state

    const payload = { username: this.username, password: this.password , mobile: this.mobile,email:this.email };
    console.log('Sending registration data:', payload);

    this.http.post<RegisterResponse>('http://localhost/thomasapp-api/register.php', payload)
      .subscribe(response => {
        this.loading = false; // End loading state
        console.log(response);
        if (response && response.success) {
          this.goToLogin();
        } else {
          alert(response.message);
        }
      }, error => {
        this.loading = false;
        alert('An error occurred during registration. Please try again later.'); // Show alert for network or server error
      });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
