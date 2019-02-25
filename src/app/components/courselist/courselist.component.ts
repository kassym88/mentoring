import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Course } from 'app/classes/Course';
import { CourseService } from 'app/services/course.service';
import { CourseFilterPipe } from 'app/pipes/course-filter.pipe';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {LoaderService} from '../../services/loader.service';
import {Store} from '@ngrx/store';
import {IState} from '../../interfaces/IState';
import {GetList} from '../../ngrx/actions/course';
// import * as Rx from 'rxjs';

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

  filterInputSubject = new Subject<string>();

  courseObservable: Observable<IState> = this.store.select('courseReducer');

  constructor(private cs: CourseService,
              private store: Store<IState>,
              private cf: CourseFilterPipe,
              private router: Router,
              private ls: LoaderService
  ) {
    this.filterInputSubject
      .pipe(debounceTime(500))
      .subscribe((event: string) => this.filterInputChange(event));
  }

  ngOnInit() {
    this.courseObservable.subscribe((state: IState) => {
      this.courseList = [...state.courses];
      this.courseListOriginal = [...state.courses];
    });
    this.getCourseList();
  }

  filterInputChange(searchWord) {
    if (searchWord && searchWord.length > 2) {
      this.ls.loaderSubject.next(true);
      this.cs.searchCourse(searchWord)
        .subscribe((resp: Course[]) => {
          this.courseList = resp;
          this.ls.loaderSubject.next(false);
        }, er => {
          console.error(er);
          this.courseList = this.courseListOriginal;
          this.ls.loaderSubject.next(false);
        });
    } else {
      this.courseList = this.courseListOriginal;
    }
  }

  getCourseList(): void {
    // this.cs.getCourseList(this.courseList.length, 5).subscribe((courseList: Course[]) => {
    //   this.courseListOriginal.push(...courseList);
    //   this.courseList.push(...courseList);
    // });
    this.store.dispatch(new GetList({start: this.courseList.length, count: 5}));
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
      // this.cs.removeItem(course).subscribe((courseList: Course[]) => {
      //   this.courseList = courseList;
      // });
      this.cs.deleteCourse(course)
        .then((courseList: Course[]) => {
          this.courseList = courseList;
        }, er => {
          alert(er);
        });
    }
  }

  courseNew(): void {
    this.router.navigateByUrl('/course/new');
    // this.addEditCourse.emit();
  }
}
