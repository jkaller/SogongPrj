import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/category', pathMatch: 'full' },
  { path: 'list/:category', component: ShopListComponent },
  { path: 'detail/:id', component: ShopDetailComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
