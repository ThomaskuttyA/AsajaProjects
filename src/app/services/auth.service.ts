import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin:boolean=false;


  constructor() { }
  setLoggedin(Log:boolean){
    this.isLoggedin=Log;
    
  }
}
