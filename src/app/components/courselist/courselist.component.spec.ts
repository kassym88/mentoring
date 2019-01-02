import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistComponent } from './courselist.component';
import { CourseitemComponent } from 'app/components/courseitem/courseitem.component';

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourselistComponent, CourseitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
