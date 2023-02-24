import { Injectable } from '@angular/core';
import { IDish } from './dishes';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cart: Array<IDish> = [];

  constructor() { }

  addToCart(dish: IDish) {
    this.cart.push(dish);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
