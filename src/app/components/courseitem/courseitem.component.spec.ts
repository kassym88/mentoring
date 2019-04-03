import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseitemComponent } from './courseitem.component';
import { HighlightDirective } from 'app/directives/highlight.directive';
import { DurationPipe } from 'app/pipes/duration.pipe';
import {CourseFilterPipe} from '../../pipes/course-filter.pipe';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('CourseitemComponent', () => {
  let component: CourseitemComponent;
  let fixture: ComponentFixture<CourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [
        CourseitemComponent,
        HighlightDirective,
        DurationPipe,
        CourseFilterPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseitemComponent);
    component = fixture.componentInstance;
    component.course = {
      date: new Date('01/09/2018'),
      description: 'Firts course',
      length: 1,
      id: 1,
      name: 'Course 1',
      isTopRated: true,
      authors: []
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
