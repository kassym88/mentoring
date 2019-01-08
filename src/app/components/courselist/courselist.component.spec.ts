import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourselistComponent } from './courselist.component';
import { CourseitemComponent } from 'app/components/courseitem/courseitem.component';
import { HighlightDirective } from 'app/directives/highlight.directive';
import { DurationPipe } from 'app/pipes/duration.pipe';
import { CourseFilterPipe } from 'app/pipes/course-filter.pipe';

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        CourselistComponent,
        CourseitemComponent,
        HighlightDirective,
        DurationPipe,
        CourseFilterPipe
      ],
      providers: [
        CourseFilterPipe
      ]
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
