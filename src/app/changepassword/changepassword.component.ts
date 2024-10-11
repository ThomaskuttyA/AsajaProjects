import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ChangepasswordService } from "../services/changepassword.service";


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  password:string="";
  errorms:string="";

  constructor(private changepasswordService: ChangepasswordService,private router:Router) { }

  changepassword() {
    this.changepasswordService.changepassword(this.password).subscribe(response => {
      if (response.success) {
        alert('you have successfully changed the password now you can login with the new password');

      } else {
        this.errorms = response.message || 'updation failed look';
        alert(this.errorms); // Show error alert
      }
    }, error => {
      this.errorms = 'Error update';
      alert(this.errorms); // Show error alert
      console.error('Error during updation', error);
    });
  }

  ngOnInit(): void {
  }

}
