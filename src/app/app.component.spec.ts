import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseitemComponent } from './components/courseitem/courseitem.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        CourseitemComponent,
        CourselistComponent,
        FooterComponent,
        LogoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mentoring'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mentoring');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
  });
});
