import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor(private httpclient: HttpClient) { }

  addItems(product){
    if(this.items.includes(product)){
      window.alert('Product is already added to Cart!');
    } else {
      window.alert('Your product is addeed to cart!');
      this.items.push(product);
    }
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items =[]
    return this.items;
  }

  getShippingPrices() {
    return this.httpclient.get('/assets/shipping.json');
  }
}
