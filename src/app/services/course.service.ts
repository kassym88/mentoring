import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../classes/Course';
import {Courses} from '../components/courselist/mock.courelist';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseList(): Observable<Course[]> {
    return of(Courses);
  }
}
