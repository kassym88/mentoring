import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../classes/Course';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/course.service';
import {IState} from '../../interfaces/IState';
import {Store} from '@ngrx/store';
import {Create, Update} from '../../ngrx/actions/course';
import {LoaderService} from '../../services/loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  courseForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required])
  });

  constructor(private route: ActivatedRoute,
              private store: Store<IState>,
              private router: Router,
              private cs: CourseService,
              private ls: LoaderService
  ) { }

  ngOnInit() {
    // console.log('this.course', this.course);
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== 'new') {
      // this.course = this.cs.getItemById(+this.id);
      this.course = new Course();
      this.ls.loaderSubject.next(true);
      this.cs.getItemById(+this.id).subscribe((course: Course[]) => {
        this.course = course[0];
        console.log('course', this.course);

        this.courseForm.setValue({
          name: course[0].name,
          description: course[0].description,
          date: course[0].date,
          length: course[0].length
        });

        this.header = `Edit course "${this.course.name}"`;
        this.ls.loaderSubject.next(false);
      }, er => {
        alert(er);
        this.ls.loaderSubject.next(false);
      });
    } else {
      this.header = 'Create new course';
      this.course = new Course();
    }
  }

  save(): void {
    // this.addEditCourseSave.emit(this.course);
    if (this.id !== 'new') {
      // this.cs.updateItem2(this.course).then(() => {
      //   this.router.navigateByUrl('');
      // }, (er: string) => {
      //   if (er === 'notAuthorized') {
      //     this.router.navigateByUrl('/login');
      //   }
      // });
      this.store.dispatch(new Create(this.course));
    } else {
      // this.cs.createCourse2(this.course).then(() => {
      //   this.router.navigateByUrl('');
      // }, (er: string) => {
      //   if (er === 'notAuthorized') {
      //     this.router.navigateByUrl('/login');
      //   }
      // });
      this.store.dispatch(new Update(this.course));
    }

  }

  cancel(): void {
    // this.addEditCourseCancel.emit();
    this.router.navigateByUrl('');
  }

}
