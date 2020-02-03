import { Component, OnInit } from '@angular/core';
//import { CartComponent } from "../cart/cart.component";
import { OnChanges } from "@angular/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  
  /*ngOnChanges(changes: import("@angular/core").SimpleChanges): {
    
  } */

  totalItems: number;

  constructor() { }

  ngOnInit() {
  }

  updateItems(){
    
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/