import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { TopBarComponent } from './top-bar/top-bar.component';
//import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule //,
    //RouterModule.forRoot([
    //  { path: '', component: PriceTableComponent },
    //])
  ],
  declarations: [
    AppComponent,
    PriceTableComponent,
    TopBarComponent
    //ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/