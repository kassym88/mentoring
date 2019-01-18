import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private as: AuthService) { }

  ngOnInit() {
  }

  signInEvent($event: {email: string, password: string}): void {
    this.as.logIn($event.email, $event.password);
  }

}
