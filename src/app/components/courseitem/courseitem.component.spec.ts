import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemComponent } from './courseitem.component';

describe('CourseitemComponent', () => {
  let component: CourseitemComponent;
  let fixture: ComponentFixture<CourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseitemComponent);
    component = fixture.componentInstance;
    component.course = {
      creationDate: '01.09.2018',
      description: 'Firts course',
      duration: 1,
      id: 1,
      title: 'Course 1'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
