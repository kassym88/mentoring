import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
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
import { LoaderComponent } from './components/loader/loader.component';
// NGRX
// import { reducers, metaReducers } from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {authReducer} from './auth/ngrx/reducers/auth.reducer';
import {AuthEffects} from './auth/ngrx/effects/auth.effects';
import {courseReducer} from './ngrx/reducers/course.reducer';
import {CourseEffects} from './ngrx/effects/course.effects';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    PagenotfoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    StoreModule.forRoot({authReducer, courseReducer}),
    EffectsModule.forRoot([AuthEffects, CourseEffects]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
