import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username: string = '';
    password: string = '';

    constructor(private http: HttpClient) {}

    login() {
        this.http.post('http://localhost/thomasapp-api/login.php', { username: this.username, password: this.password })
            .subscribe((response: any) => {
                if (response.success) {
                    console.log('Login successful!');
                } else {
                    console.log('Invalid credentials.');
                }
            });
    }
}
