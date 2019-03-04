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
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
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
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== 'new') {
      this.ls.loaderSubject.next(true);
      this.cs.getItemById(+this.id).subscribe((course: Course) => {
        this.courseForm.patchValue({
          name: course.name,
          description: course.description,
          date: course.date,
          length: course.length
        });

        this.header = `Edit course "${course.name}"`;
        this.ls.loaderSubject.next(false);
      }, er => {
        alert(er);
        this.ls.loaderSubject.next(false);
      });
    } else {
      this.header = 'Create new course';
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

  save2(): void {
    console.log('courseForm', this.courseForm.get('name').valid);
    if (this.courseForm.get('name').valid
      && this.courseForm.get('description').valid
      && this.courseForm.get('length').valid
      && this.courseForm.get('date').valid
    ) {
      this.course.name = this.courseForm.get('name').value;
      this.course.description = this.courseForm.get('description').value;
      this.course.length = this.courseForm.get('length').value;
      this.course.date = this.courseForm.get('date').value;
      if (this.id !== 'new') {
        this.store.dispatch(new Create(this.course));
      } else {
        this.store.dispatch(new Update(this.course));
      }
    } else {
      alert('Some fields are empty');
    }
  }

}
