import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = '';
  loginPlaceholder = 'Type email address';
  password = '';
  passwordPlaceholder = 'Type password';

  constructor() { }

  ngOnInit() {
  }

}
