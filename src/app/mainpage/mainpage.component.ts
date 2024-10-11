import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainpageService } from '../services/mainpage.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  username: string | null = '';
  email: string | null = '';
  phoneNumber: string | null = '';

  constructor(private mainpageService: MainpageService, private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.mainpageService.getUserInfo(this.username).subscribe(
        response => {
          if (response.success) {
            this.email = response.email;
            this.phoneNumber = response.phoneNumber;
          } else {
            console.error('Error fetching user info:', response.message);
          }
        },
        error => {
          console.error('Error fetching user info', error);
        }
      );
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // Ensure this method matches the HTML template
  goToTodoList() {
    this.router.navigate(['/todolist']);
  }

  gotochangepassword()
  {
    this.router.navigate(['/changepassword']);
  }



}
