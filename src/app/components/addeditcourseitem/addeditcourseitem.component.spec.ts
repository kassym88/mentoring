import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcourseitemComponent } from './addeditcourseitem.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from '../../app.module';
import {DurationPipe} from '../../pipes/duration.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '../../auth/ngrx/reducers/auth.reducer';
import {courseReducer} from '../../ngrx/reducers/course.reducer';
import {Course} from '../../classes/Course';

describe('AddeditcourseitemComponent', () => {
  let component: AddeditcourseitemComponent;
  let fixture: ComponentFixture<AddeditcourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
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
        AddeditcourseitemComponent,
        DurationPipe
      ],
      providers: [
        DurationPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditcourseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
