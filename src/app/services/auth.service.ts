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
    this.user.email = email;
    // this.http
    //   .post(`${projectConstants.rest}/auth/login`, {data: {email: email, password: password}}, httpOptions)
    //   .subscribe(resp => {
    //     console.log('resp', resp);
    //   }, er => {
    //     console.log('er', er);
    //   });
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
