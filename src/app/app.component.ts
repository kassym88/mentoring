import {Component, OnInit} from '@angular/core';
import { User } from './classes/User';
import {AuthService} from './services/auth.service';
import {Course} from './classes/Course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'mentoring';
  addEdit: boolean;
  editCourse: Course;
  isAuthenticated = false;
  user: User;

  constructor(private as: AuthService,
              private router: Router
  ) {
    this.isAuthenticated = this.as.isAuthenticated();
  }

  ngOnInit(): void {
    this.user = this.as.getUser();
    // this.as.userSubject.subscribe((user: User) => {
    //   this.user = user;
    // });
    if (!this.user.token) {
      this.router.navigateByUrl('/login');
    }
  }

  addEditCourse($event): void {
    this.addEdit = true;
    this.editCourse = $event;
  }

  addEditCourseSave($event): void {
    if ($event.id) {
      // edit course
    } else {
      // new course
    }
  }

  addEditCourseCancel(): void {
    this.addEdit = false;
    this.editCourse = null;
  }
}
