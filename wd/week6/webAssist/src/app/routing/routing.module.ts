import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { FirstcompComponent } from '../firstcomp/firstcomp.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstcompDetailComponent } from '../firstcomp-detail/firstcomp-detail.component';

const routes: Routes = [ 
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id/products', component: FirstcompComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full'}, 
 

  { path: 'categories/:id1/products/:id2', component: FirstcompDetailComponent },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }