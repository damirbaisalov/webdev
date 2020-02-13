import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
 
  share() {
    window.alert('The product has been shared!');
  }

  share1(){
    for(let i=0;i<products.length;i++){
      let ref = products[i].link;
      
      location.href=("https://wa.me/?text=Держи%20клевый%20продукт%20" + ref);

    }
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/