import { Injectable } from '@angular/core';
import {User} from '../classes/User';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {projectConstants} from '../config/constants';
import {Observable, Subject} from 'rxjs';
import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  userSubject: Subject<User> = new Subject<User>();

  constructor(private router: Router,
              private http: HttpClient,
              private ls: LoaderService) {
    this.user = new User();
  }

  logIn(email: string, password: string): void {
    // this.user.email = email;
    this.ls.loaderSubject.next(true);
    this.http
      .post(`${projectConstants.rest}/auth/login`, {login: email, password: password})
      .subscribe((resp: {token: string}) => {
        this.user.token = resp.token;
        this.userSubject.next(this.user);
        this.router.navigateByUrl('');
        this.ls.loaderSubject.next(false);
      }, er => {
        alert(er.error);
        this.ls.loaderSubject.next(false);
      });

  }

  logIn2(email: string, password: string): Observable<{token: string} | any> {
    return this.http.post(`${projectConstants.rest}/auth/login`, {login: email, password: password});
  }

  logOut(): void {
    this.user.token = null;
    this.userSubject.next(this.user);
    this.router.navigateByUrl('/login');
  }

  getUserLogin(): string {
    return this.user.email;
  }

  getUser(): User {
    return this.user;
  }

  // getUser2(): Observable<any> {
  //   // return this.http
  // }

  isAuthenticated(): boolean {
    return !!this.user.email;
  }
}
