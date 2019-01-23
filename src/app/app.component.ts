import {Component, OnInit} from '@angular/core';
import { User } from './classes/User';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mentoring';
  add_edit: boolean;
  isAuthenticated = false;
  user: User;

  constructor(private as: AuthService) {
    this.isAuthenticated = this.as.isAuthenticated();
  }

  ngOnInit(): void {
    this.user = this.as.getUser();
  }

  addCourse(): void {
    this.add_edit = true;
  }

  editCourse(): void {
    this.add_edit = true;
  }
}
