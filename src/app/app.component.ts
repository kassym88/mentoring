import {Component, OnInit} from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mentoring';
  isAuthenticated = false;
  user: User;

  toggleLoggedFlag($event): void {
    this.isAuthenticated = $event;
  }

  ngOnInit(): void {
    this.user = new User();
  }
}
