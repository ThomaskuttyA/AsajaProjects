import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  username: string | null = '';
  email: string | null = '';
  phoneNumber: string | null = '';

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goToTodoList() {
    this.router.navigate(['/todolist']); // Ensure this matches your routing setup
  }


  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.phoneNumber = localStorage.getItem('phoneNumber');
  }


}
