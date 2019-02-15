import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../classes/Course';
import { Courses } from '../components/courselist/mock.courelist';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {projectConstants} from '../config/constants';
import {LoaderService} from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[];
  constructor(private as: AuthService,
              private http: HttpClient,
              private ls: LoaderService) {
    this.courses = Courses;
  }

  getCourseList(start: number = 0, count: number = 5): Observable<Course[]> {
    // return of(this.courses);
    const url = `${projectConstants.rest}/courses?start=${start}&count=${count}`;
    return this.http.get<Course[]>(url);
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
      if (!this.as.getUser().token) {
        reject('notAuthorized');
      } else {
        const curCourse: Course = this.courses.find((course: Course) => course.id === updatedCourse.id);
        if (curCourse) {
          this.ls.loaderSubject.next(true);
          const url = `${projectConstants.rest}/course_update`;
          this.http.post(url, {updatedCourse: updatedCourse})
            .subscribe(resp => {
              Object.keys(curCourse).forEach((key: string) => curCourse[key] = updatedCourse[key]);
              this.ls.loaderSubject.next(false);
              resolve();
            }, er => {
              this.ls.loaderSubject.next(false);
              reject(er);
            });
        } else {
          reject('Course not found');
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

  deleteCourse(removeCourse: Course): Promise<Course[] | string> {
    return new Promise((resolve, reject) => {
      const x: number = this.courses.findIndex((course: Course) => course.id === removeCourse.id);
      if (x > -1) {
        this.ls.loaderSubject.next(true);
        const url = `${projectConstants.rest}/course_delete`;
        this.http.post(url, {id: removeCourse.id})
          .subscribe(resp => {
            this.courses.splice(x, 1);
            this.ls.loaderSubject.next(false);
            resolve(this.courses);
          }, er => {
            this.ls.loaderSubject.next(false);
            reject(er);
          });
      } else {
        reject('Course not found');
      }
    });
  }

  searchCourse(searchWord: string): Observable<Course[] | string> {
    const url = `${projectConstants.rest}/course_search`;
    return this.http.post<Course[] | string>(url, {searchWord: searchWord});
  }
}
