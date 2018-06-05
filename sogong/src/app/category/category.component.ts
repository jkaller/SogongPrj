import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  location: string;

  constructor(
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.getCategories();
    this.getUserLocation();
  }

  getCategories(): void{
    this.categories = this.shopService.getCategories();
  }

  getUserLocation(){
    this.location = this.shopService.getUserLocation();
  }

  changeLocation(newlocation :string){
    this.shopService.changeLocation(newlocation);
  }
}
