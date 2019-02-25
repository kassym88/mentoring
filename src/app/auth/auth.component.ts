import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Store} from '@ngrx/store';
import {IState} from '../interfaces/IState';
import {Login} from './ngrx/actions/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // constructor(private as: AuthService) { }
  constructor(private store: Store<IState>) { }

  ngOnInit() {
  }

  signInEvent($event: {email: string, password: string}): void {
    // this.as.logIn($event.email, $event.password);
    this.store.dispatch(new Login({email: $event.email, password: $event.password}));
  }

}
