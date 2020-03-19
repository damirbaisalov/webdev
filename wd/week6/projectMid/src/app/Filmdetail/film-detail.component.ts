import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { FilmItem } from '../classses';
import { Location } from '@angular/common';

@Component({
  selector: 'app-firstcomp-detail',
  templateUrl: './firstcomp-detail.component.html',
  styleUrls: ['./firstcomp-detail.component.css']
})
export class FirstcompDetailComponent implements OnInit {

  products: FilmItem;

  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{
    const id = +this.route.snapshot.paramMap.get('id2'); 
   
    const id2 = +this.route.snapshot.paramMap.get('id1');
    this.service1.getProduct(id, id2).subscribe(categories => this.products = categories);
  }

  getBack(): void{
    this.location.back();
  }

}