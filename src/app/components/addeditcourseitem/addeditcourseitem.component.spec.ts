import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcourseitemComponent } from './addeditcourseitem.component';

describe('AddeditcourseitemComponent', () => {
  let component: AddeditcourseitemComponent;
  let fixture: ComponentFixture<AddeditcourseitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditcourseitemComponent ]
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
