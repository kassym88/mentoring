import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from 'app/classes/Course';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseitemComponent implements OnInit {
  @Input() course: Course;
  @Input() courseEdit: Function;
  @Input() courseDelete: Function;
  @Output() courseEditEvent: EventEmitter<Course> = new EventEmitter();
  @Output() courseDeleteEvent: EventEmitter<Course> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  edit(course: Course): void {
    // this.courseEdit(course);
    this.courseEditEvent.emit(course);
  }

  delete(course: Course): void {
    // this.courseDelete(course);
    this.courseDeleteEvent.emit(course);
  }
}
