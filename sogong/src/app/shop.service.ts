import { Injectable } from '@angular/core';
import { findLast } from '@angular/compiler/src/directive_resolver';

import { Observable, of } from 'rxjs';

import { Shop } from './shop';
import { SHOPS } from './database/mock-shops';
import { Categories } from './database/mock-category';
import { GpsComponent } from './gps/gps.component';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

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
    return of(SHOPS.filter(shop => shop.category === category));
  }

  getUserLocation(){
    //gps를 이용해 user의 location 설정.
    //this.user.location = Gps.getLocation();
  }

  getCurrentTime(): number{
    return 9;
  }
}
