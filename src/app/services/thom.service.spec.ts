import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string | null = null;

  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  clearUser() {
    this.username = null;
  }
}
