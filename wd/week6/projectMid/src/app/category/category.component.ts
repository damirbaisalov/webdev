import { Component, OnInit } from '@angular/core';
import { Category, FilmItem } from '../classses';
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

  item1: FilmItem;
  item2: FilmItem;
  item3: FilmItem;
  item4: FilmItem;
  item5: FilmItem;

  items: FilmItem[];

  constructor() { 
    this.item1 = new FilmItem();
    this.item1.id = 1;
    this.item1.title = "Film1";
    this.item1.description = "somegood";
    this.item1.rating = 5;

    this.item2 = new FilmItem();
    this.item2.id = 2;
    this.item2.title = "prod2asdas";
    this.item2.description = "bad";
    this.item2.rating = 3;

    this.item3 = new FilmItem();
    this.item3.id = 3;
    this.item3.title = "prod3qweas";
    this.item3.description = "acceptable";
    this.item3.rating = 10;

    this.item4 = new FilmItem();
    this.item4.id = 4;
    this.item4.title = "prod4film4";
    this.item4.description = "worst";
    this.item4.rating = 1;

    this.item5 = new FilmItem();
    this.item5.id = 5;
    this.item5.title = "film5";
    this.item5.description= "somesome";
    this.item5.rating = 2;
    

    this.items = [this.item1, this.item2];

    this.categ = new Category();
    this.categ.name = "ALL";
    this.categ.products = this.items;

   

    this.categories = [this.categ];
  }

  getThisCategories(): any { //Зачем здесь эта функция? Чтобы передать наши категории в сервис
    return this.categories;
  }

  ngOnInit(): void {
  
  }
  

}