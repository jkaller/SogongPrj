import { Injectable } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

import { Observable, of } from 'rxjs';

import { Shop } from './shop';
import { SHOPS } from './database/mock-shops';
import { Categories } from './database/mock-category';
import { DateAdapter } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  location: string;

  constructor() { }

  getShops(): Observable<Shop[]>{
    return of(SHOPS);
  }

  getShop(id: number): Observable<Shop>{
    return of(SHOPS.find(shop => shop.id === id));
  }

  getCategories(): string[]{
    return Categories;
  }
  
  //getCategory
  getShopsByCategory(category: string): Observable<Shop[]>{
    return of(SHOPS.filter(shop => (shop.category === category && shop.location === this.location)));
  }

  setGpsLocation(){
    this.location = '남송리';
  }

  getUserLocation(): string{
    return this.location;
  }

  changeLocation(newlocation: string){
    this.location = newlocation;
  }

  getCurrentTime(): number{
    var d = new Date();
    return d.getHours();
  }
}
