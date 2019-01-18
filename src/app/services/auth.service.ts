import { Injectable } from '@angular/core';
import {User} from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor() {
    this.user = new User();
  }

  logIn(email: string, password): void {
    this.user.email = email;
  }

  logOut(): void {
    this.user.email = null;
  }

  getUserLogin(): string {
    return this.user.email;
  }

  getUser(): User {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user.email;
  }
}
