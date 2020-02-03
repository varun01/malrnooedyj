import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.items = this.cart.getItems();
  }

  clearItems(){
    this.items = [];
    return this.items;
  }

}
