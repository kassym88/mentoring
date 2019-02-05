import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourselistComponent} from './components/courselist/courselist.component';
import {AddeditcourseitemComponent} from './components/addeditcourseitem/addeditcourseitem.component';
import {AuthComponent} from './auth/auth.component';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourselistComponent },
  { path: 'course/:id', component: AddeditcourseitemComponent },
  { path: 'courses/new', component: AddeditcourseitemComponent },
  { path: 'login', component: AuthComponent },
  { path: '**', component: PagenotfoundComponent}/*,
  { path: '404', name: 'NotFound', component: PagenotfoundComponent},
  { path: '*path', redirectTo: ['NotFound'] }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
