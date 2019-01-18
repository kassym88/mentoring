import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from 'app/classes/User';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Input() user: User;
  @Output() toggleLoggedFlag: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  signInEvent($event: {email: string, password: string}): void {
    this.user.email = $event.email;
    this.toggleLoggedFlag.emit(true);
  }

}
