import { Component, OnInit } from '@angular/core';

import { ShopService } from './shop.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private shopService: ShopService){}
  ngOnInit(){
    this.shopService.setGpsLocation();
  }

  title = 'Is There Open';
}
