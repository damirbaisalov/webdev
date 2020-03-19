import { Component, OnInit } from '@angular/core';
import { Category, ProdItem } from '../films';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categ: Category;
  categ2: Category;
  categories: Category[];

  item1: ProdItem;
  item2: ProdItem;
  item3: ProdItem;
  item4: ProdItem;
  item5: ProdItem;

  items: ProdItem[];

  constructor() { 
    this.item1 = new ProdItem();
    this.item1.id = 1;
    this.item1.name = "film1";
    this.item1.description = "good";
    this.item1.rating = 5;
    this.item1.viewcount = 0;

    this.item2 = new ProdItem();
    this.item2.id = 2;
    this.item2.name = "film2";
    this.item2.description = "bad";
    this.item2.rating = 3;
    this.item1.viewcount = 0;

    this.item3 = new ProdItem();
    this.item3.id = 3;
    this.item3.name = "film3";
    this.item3.description = "WELLDONE";
    this.item3.rating = 10;
    this.item1.viewcount = 0;

    this.item4 = new ProdItem();
    this.item4.id = 4;
    this.item4.name = "film4";
    this.item4.description = "worst";
    this.item4.rating = 1;
    this.item1.viewcount = 0;
    
    this.item5 = new ProdItem();
    this.item5.id = 5;
    this.item5.name = "film5";
    this.item5.description = "VERYBAD";
    this.item5.rating = 0;
    this.item1.viewcount = 0;

    this.items = [this.item1, this.item2 , this.item3, this.item4, this.item5];

    this.categ = new Category();
    this.categ.id = 1;
    this.categ.name = "All";
    this.categ.products = this.items;

    this.categ2 = new Category();
    this.categ.id = 2;
    this.categ.name = "ALL";
    this.categ.products = this.items;


  

    this.categories = [this.categ,this.categ2];
  }

  getThisCategories(): any { 
    return this.categories;
  }

  ngOnInit(): void {
  
  }
  

}
