import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CourseitemComponent } from './components/courseitem/courseitem.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
// Directives
import { HighlightDirective } from './directives/highlight.directive';
// Services
import { CourseService } from './services/course.service';
import {AuthService} from './services/auth.service';
// Pipes
import { DurationPipe } from './pipes/duration.pipe';
import { CourseFilterPipe } from './pipes/course-filter.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { AddeditcourseitemComponent } from './components/addeditcourseitem/addeditcourseitem.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CourseitemComponent,
    CourselistComponent,
    FooterComponent,
    LogoComponent,
    HighlightDirective,
    DurationPipe,
    CourseFilterPipe,
    ModalComponent,
    AddeditcourseitemComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    CourseFilterPipe,
    CourseService,
    AuthService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
