import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode} from '@angular/core';
import { Observable } from "rxjs";

import { elements as el } from '../../data/advtooltip_2.json';


@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})

@Injectable()
export class PriceTableComponent {
    elementList = isDevMode() ? el : [];

    constructor(private http: HttpClient) {
        /*
        this.http.get("D:\\Users\\Eru\\Documents\\GitHub\\custom-tooltip\\src\\data\\advtooltip.json").subscribe((res)=>{
            console.log(res);   // CORS issues
        });
        */
        console.log("constructor elementList", this.elementList)
        console.log("constructor el", el)

        if (isDevMode()) {
            console.log("environment: dev")
        } else {
            console.log("environment: prod")
        }
    }

    ngOnInit() {
        console.log("onInit")
        if (!this.elementList.length) {
            // @ts-ignore
            console.log("onInit data from js included in html file", data.elements)
            // @ts-ignore
            this.elementList = data.elements
        }
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/