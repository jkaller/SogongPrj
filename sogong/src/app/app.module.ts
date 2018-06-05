import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { CategoryComponent } from './category/category.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AppRoutingModule } from './/app-routing.module';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopDetailComponent,
    CategoryComponent,
    ShopListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
