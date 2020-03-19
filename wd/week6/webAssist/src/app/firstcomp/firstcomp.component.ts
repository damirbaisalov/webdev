import { Component, OnInit, Input } from '@angular/core';
import { ProdItem, Category } from '../films';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})


export class FirstcompComponent implements OnInit {

 @Input() public i: Category;
 categories: Category;
 
  constructor(private route: ActivatedRoute,
    private service1: CategoryService,
    private location: Location) {
   }

  ngOnInit(): void {
    this.getProds();
  }

  getProds(): void{ 
    const id = +this.route.snapshot.paramMap.get('id');
   
    this.service1.getCategory(id).subscribe(categories => this.categories = categories);
    
  }

  getBack(): void{ 
    this.location.back();
  }

}
