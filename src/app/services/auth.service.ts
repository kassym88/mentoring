import { Injectable } from '@angular/core';
import {User} from '../classes/User';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private router: Router) {
    this.user = new User();
  }

  logIn(email: string, password): void {
    this.user.email = email;
    this.router.navigateByUrl('');
  }

  logOut(): void {
    this.user.email = null;
    this.router.navigateByUrl('/login');
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
