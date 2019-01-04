import { Component, OnInit } from '@angular/core';
import {Course} from 'app/classes/Course';
import {CourseService} from 'app/services/course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  courseList: Course[] = [];
  constructor(private cs: CourseService) { }

  ngOnInit() {
    this.cs.getCourseList().subscribe((courseList: Course[]) => {
      this.courseList = courseList;
    });
  }

  getCourseList(): void {
    this.cs.getCourseList().subscribe((courseList: Course[]) => {
      this.courseList = courseList;
    });
  }
  courseEditEvent(course: Course): void {
    console.log('course', course);
  }

  courseDeleteEvent(course: Course): void {
    console.log('course', course);
  }
  courseEdit = (course: Course): void => {
    console.log('course', course);
  }
  courseDelete = (course: Course): void => {
    console.log('course', course);
  }
}
