import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { CategoryComponent } from './category/category.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { GpsComponent } from './gps/gps.component';


@NgModule({
  declarations: [
    AppComponent,
    ShopDetailComponent,
    CategoryComponent,
    ShopListComponent,
    GpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
