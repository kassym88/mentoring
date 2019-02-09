import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from 'app/classes/Course';
import { CourseService } from 'app/services/course.service';
import { CourseFilterPipe } from 'app/pipes/course-filter.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
  @Output() addEditCourse: EventEmitter<Course | null> = new EventEmitter();

  filter: string;
  courseListOriginal: Course[] = [];
  courseList: Course[] = [];
  constructor(private cs: CourseService,
              private cf: CourseFilterPipe,
              private router: Router
  ) { }

  ngOnInit() {
    this.cs.getCourseList(this.courseList.length, 5).subscribe((courseList: Course[]) => {
      // console.log('courseList', courseList);
      this.courseListOriginal.push(...courseList);
      this.courseList.push(...courseList);
    });
  }

  getCourseList(): void {
    this.cs.getCourseList(this.courseList.length, 5).subscribe((courseList: Course[]) => {
      this.courseListOriginal.push(...courseList);
      this.courseList.push(...courseList);
    });
  }

  searchCourseList(filter: string): void {
    this.courseList = this.cf.transform(this.courseListOriginal, filter);
  }

  courseEditEvent(course: Course): void {
    this.addEditCourse.emit(course);
  }

  courseEdit = (course: Course): void => {
    console.log('course', course);
  }
  courseDelete = (course: Course): void => {
    console.log('course', course);
  }

  courseDeleteEvent(course: Course): void {
    if (confirm(`Do you really want to delete this course "${course.title}"?`)) {
      this.cs.removeItem(course).subscribe((courseList: Course[]) => {
        this.courseList = courseList;
      });
    }
  }

  courseNew(): void {
    this.router.navigateByUrl('/course/new');
    // this.addEditCourse.emit();
  }
}
