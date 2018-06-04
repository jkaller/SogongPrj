import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Shop } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shops: Shop[];
  activeShops: Shop[];
  inactiveShops: Shop[];

  category: string;
  currentTime: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    this.getShopsByCetegory();
    this.getcurrentTime();
    this.getActiveShop();
    this.getInactiveShop();
  }

  getShopsByCetegory(){
    this.category = this.route.snapshot.paramMap.get('category');
    this.shopService.getShopsByCategory(this.category).subscribe(shops => this.shops = shops);
  }

  goBack(): void{
    this.location.back();
  }

  getcurrentTime(){
    this.currentTime = this.shopService.getCurrentTime();
  }

  getActiveShop(){
    this.activeShops = this.shops.filter(shops => (shops.opentime <= this.currentTime) && (shops.closetime > this.currentTime));
  }

  getInactiveShop(){
    this.inactiveShops = this.shops.filter(shops => (shops.opentime > this.currentTime) || (shops.closetime <= this.currentTime));
  }

}
