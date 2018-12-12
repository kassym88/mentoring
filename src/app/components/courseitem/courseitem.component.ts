import { Component, OnInit } from '@angular/core';
import {Course} from '../../classes/Course';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseitemComponent implements OnInit {
  course: Course;
  constructor(course: Course) {
    this.course = course;
  }

  ngOnInit() {
  }

}
