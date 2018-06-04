import { Component, OnInit } from '@angular/core';

import { ShopService } from '../shop.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[] = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void{
    this.categories = this.shopService.getCategories();
  }

}
