import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/services/auth.service';
import {User} from '../../classes/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  constructor(private as: AuthService) { }

  ngOnInit() {
    this.user = this.as.getUser();
  }

  logout(): void {
    this.as.logOut();
  }
}
