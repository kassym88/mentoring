import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  user = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  signIn(login: string, password: string): void {
    this.signInEvent.emit({email: login, password: password});
  }

  signIn2(): void {
    if (this.user.get('login').valid && this.user.get('password').valid) {
      this.signInEvent.emit({email: this.user.get('login').value, password: this.user.get('password').value});
    } else {
      alert('Some fields are empty');
    }
  }

}
