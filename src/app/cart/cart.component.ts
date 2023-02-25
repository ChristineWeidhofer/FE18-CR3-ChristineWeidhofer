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

  totalBefore: number = this.dish.price;
  service: number = this.totalBefore * 0.1;
  discount: number = this.totalBefore * 0.15;
  total: number = 0;
  
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

  functionTotal(): number {
      this.total = this.totalBefore + this.service;
      if (this.totalBefore > 40) {
        this.total = this.total - this.discount;
      }
    return this.total;
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
  }

}


