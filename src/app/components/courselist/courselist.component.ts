import { Component, OnInit } from '@angular/core';
import {Course} from 'app/classes/Course';
import {CourseService} from 'app/services/course.service';
import {CourseFilterPipe} from '../../pipes/course-filter.pipe';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  courseListOriginal: Course[] = [];
  courseList: Course[] = [];
  constructor(private cs: CourseService, private cf: CourseFilterPipe) { }

  ngOnInit() {
    this.cs.getCourseList().subscribe((courseList: Course[]) => {
      this.courseListOriginal = courseList;
      this.courseList = courseList;
    });
  }

  getCourseList(): void {
    this.cs.getCourseList().subscribe((courseList: Course[]) => {
      this.courseList = courseList;
    });
  }

  searchCourseList(filter: string): void {
    this.courseList = this.cf.transform(this.courseListOriginal, filter);
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
