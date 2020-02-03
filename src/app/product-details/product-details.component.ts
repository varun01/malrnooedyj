import { Component, OnInit } from '@angular/core';
import { products } from "../products";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../service/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;
  constructor(private route: ActivatedRoute,
              private cart: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[params.get('productId')];
    });
  }

  addProductToCart(product){
    this.cart.addItems(product);
  }
}
