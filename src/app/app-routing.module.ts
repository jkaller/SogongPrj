import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { RestsComponent }      from './rests/rests.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { RestsDetailComponent }  from './rests-detail/rests-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'detail1/:id', component: RestsDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'rests', component: RestsComponent }
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
