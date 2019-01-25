import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../classes/Course';

@Component({
  selector: 'app-addeditcourseitem',
  templateUrl: './addeditcourseitem.component.html',
  styleUrls: ['./addeditcourseitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddeditcourseitemComponent implements OnInit {
  @Input() course: Course;
  @Output() addEditCourseSave: EventEmitter<Course> = new EventEmitter();
  @Output() addEditCourseCancel: EventEmitter<null> = new EventEmitter();
  header: string;
  constructor() { }

  ngOnInit() {
    console.log('this.course', this.course);
    if (this.course) {
      this.header = `Edit course "${this.course.title}"`;
    } else {
      this.header = 'Create new course';
      this.course = new Course();
    }
  }

  save(): void {
    this.addEditCourseSave.emit(this.course);
  }

  cancel(): void {
    this.addEditCourseCancel.emit();
  }

}
