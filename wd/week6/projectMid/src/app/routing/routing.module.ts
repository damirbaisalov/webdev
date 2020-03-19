import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { FirstcompComponent } from '../film-list/film-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FirstcompDetailComponent } from '../Filmdetail/film-detail.component';

const routes: Routes = [ //Здесь сами только это пишем, остальное все так и быть должно
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