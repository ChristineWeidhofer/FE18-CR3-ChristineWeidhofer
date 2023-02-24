import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { dishes, IDish } from '../dishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  dish: IDish = {} as IDish;
  cart: Array<IDish> = [];

  service: number = this.dish.price * 0.1;
  discount: number = this.dish.price * 0.15;
  total: number = this.dish.price + this.service - this.discount;
  
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private CS: CartService) {}

  clearCart() {
    alert('Your cart has been emptied');
    this.cart = this.CS.clearCart();
  }

  onSubmit() {
    alert('Your order has been submitted');
    this.cart = this.CS.clearCart();
    this.checkoutForm.reset();
  }

  functionTotal() {
    let total: number = 0;
    for (let val of this.cart) {
      let service: number = val.price * 0.1;
      total = total + service;
      if (total > 40) {
        let discount: number = val.price * 0.15;
        total = total - discount;
      }
    }  
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
  }

}


