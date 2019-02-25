import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/services/auth.service';
import {User} from '../../classes/User';
import {Store} from '@ngrx/store';
import {IState} from '../../interfaces/IState';
import {Observable} from 'rxjs';
import {Logout} from '../../auth/ngrx/actions/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  userObservable: Observable<IState> = this.store.select('authReducer');
  // constructor(private as: AuthService) { }
  constructor(private store: Store<IState>) { }

  ngOnInit() {
    // this.user = this.as.getUser();
    // this.as.userSubject.subscribe((user: User) => {
    //   this.user = user;
    // });
    this.userObservable.subscribe((state: IState) => this.user = state.user);
  }

  logout(): void {
    // this.as.logOut();
    this.store.dispatch(new Logout);
  }
}
