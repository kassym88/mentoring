import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CourselistComponent } from './courselist.component';
import { CourseitemComponent } from 'app/components/courseitem/courseitem.component';
import { HighlightDirective } from 'app/directives/highlight.directive';
import { DurationPipe } from 'app/pipes/duration.pipe';
import { CourseFilterPipe } from 'app/pipes/course-filter.pipe';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '../../auth/ngrx/reducers/auth.reducer';
import {courseReducer} from '../../ngrx/reducers/course.reducer';

describe('CourselistComponent', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        StoreModule.forRoot({authReducer, courseReducer})
      ],
      declarations: [
        CourselistComponent,
        CourseitemComponent,
        HighlightDirective,
        DurationPipe,
        CourseFilterPipe,
        BreadcrumbsComponent
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
