import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemComponent } from './courseitem.component';
import { HighlightDirective } from 'app/directives/highlight.directive';

describe('CourseitemComponent', () => {
  let component: CourseitemComponent;
  let fixture: ComponentFixture<CourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseitemComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseitemComponent);
    component = fixture.componentInstance;
    component.course = {
      creationDate: new Date('01/09/2018'),
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
