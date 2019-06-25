import { Component } from '@angular/core';

//import { products } from '../products';
import { elements } from '../../data/advtooltip_2.json';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})

export class PriceTableComponent {
  elements = elements;

  constructor() {
      console.log(elements)
  }
  share() {
    //window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/