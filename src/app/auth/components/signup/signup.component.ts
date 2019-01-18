import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  login = '';
  loginPlaceholder = 'Type email address';
  password = '';
  passwordPlaceholder = 'Type password';
  password2 = '';
  passwordPlaceholder2 = 'Retype password';
  constructor() { }

  ngOnInit() {
  }

}
