import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesListComponent},
  {path: 'courses/:id', component: CoursesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
