import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../classes/Course';
import { Courses } from '../components/courselist/mock.courelist';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  constructor(private as: AuthService) {
    this.courses = Courses;
  }

  getCourseList(): Observable<Course[]> {
    return of(this.courses);
  }

  createCourse(newCourse: Course): Observable<Course[]> {
    this.courses.push(newCourse);
    return of(this.courses);
  }

  createCourse2(newCourse: Course): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.as.getUser().email) {
        reject('notAuthorized');
      } else {
        this.courses.push(newCourse);
        resolve();
      }

    });
  }

  getItemById(id: number): Course {
    return this.courses.find((course: Course) => course.id === id);
  }

  updateItem(updatedCourse: Course): Observable<Course[]> {
    const curCourse: Course = this.courses.find((course: Course) => course.id === updatedCourse.id);
    if (curCourse) {
      Object.keys(curCourse).forEach((key: string) => curCourse[key] = updatedCourse[key]);
    }
    return of(this.courses);
  }

  updateItem2(updatedCourse: Course): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.as.getUser().email) {
        reject('notAuthorized');
      } else {
        const curCourse: Course = this.courses.find((course: Course) => course.id === updatedCourse.id);
        if (curCourse) {
          Object.keys(curCourse).forEach((key: string) => curCourse[key] = updatedCourse[key]);
          resolve();
        } else {
          reject();
        }
      }
    });
  }

  removeItem(removeCourse: Course): Observable<Course[]> {
    const x: number = this.courses.findIndex((course: Course) => course.id === removeCourse.id);
    if (x > -1) {
      this.courses.splice(x, 1);
    }
    return of(this.courses);
  }
}
