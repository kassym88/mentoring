import { Injectable } from '@angular/core';
import {User} from '../classes/User';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {projectConstants} from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private router: Router,
              private http: HttpClient) {
    this.user = new User();
  }

  logIn(email: string, password): void {
    // this.user.email = email;
    this.http
      .post(`${projectConstants.rest}/auth/login`, {data: {login: email, password: password}})
      .subscribe((resp: {token: string}) => {
        this.user.token = resp.token;
        this.router.navigateByUrl('');
      }, er => {
        alert(er.error);
      });

  }

  logOut(): void {
    this.user.token = null;
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
