import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
// Pipes
import { DurationPipe } from './pipes/duration.pipe';
import { CourseFilterPipe } from './pipes/course-filter.pipe';

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
    CourseFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule
  ],
  providers: [
    CourseFilterPipe,
    CourseService
  ],
  bootstrap: [
    AppComponent]
})
export class AppModule { }
