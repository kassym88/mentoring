import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../classes/Course';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/course.service';

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
  id: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private cs: CourseService
  ) { }

  ngOnInit() {
    // console.log('this.course', this.course);
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== 'new') {
      this.course = this.cs.getItemById(+this.id);
      this.header = `Edit course "${this.course.title}"`;
    } else {
      this.header = 'Create new course';
      this.course = new Course();
    }
  }

  save(): void {
    // this.addEditCourseSave.emit(this.course);
    if (this.id !== 'new') {
      this.cs.updateItem2(this.course).then(() => {
        this.router.navigateByUrl('');
      });
    } else {
      this.cs.createCourse2(this.course).then(() => {
        this.router.navigateByUrl('');
      });
    }

  }

  cancel(): void {
    this.addEditCourseCancel.emit();
  }

}
