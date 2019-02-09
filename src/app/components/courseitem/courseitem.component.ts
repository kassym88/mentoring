import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from 'app/classes/Course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseitemComponent implements OnInit {
  @Input() course: { date: Date; description: string; length: number; id: number; name: string; isTopRated: boolean; authors: any[] };
  @Input() courseEdit: Function;
  @Input() courseDelete: Function;
  @Output() courseEditEvent: EventEmitter<Course> = new EventEmitter();
  @Output() courseDeleteEvent: EventEmitter<Course> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  edit(course: Course): void {
    // this.courseEdit(course);
    // this.courseEditEvent.emit(course);
    this.router.navigateByUrl(`/course/${course.id}`);
  }

  delete(course: Course): void {
    // this.courseDelete(course);
    this.courseDeleteEvent.emit(course);
  }
}
