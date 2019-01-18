import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() signInEvent: EventEmitter<{email: string, password: string}> = new EventEmitter();
  login = '';
  loginPlaceholder = 'Type email address';
  password = '';
  passwordPlaceholder = 'Type password';

  constructor() { }

  ngOnInit() {
  }

  signIn(login: string, password: string): void {
    this.signInEvent.emit({email: login, password: password});
  }

}
