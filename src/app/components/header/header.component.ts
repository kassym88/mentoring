import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../classes/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  @Input() user: User;
  @Output() toggleLoggedFlag: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  logout(): void {
    this.toggleLoggedFlag.emit(false);
  }
}
