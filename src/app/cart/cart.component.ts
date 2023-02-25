import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { IDish } from '../dishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  dish: IDish = {} as IDish; // add for functionTotal()
  cart: Array<IDish> = [];

  totalBefore: number = 0; // properties needed in functionTotal()
  service: number = 0;
  totalAfter: number = 0;
  discount: number = 0;
  total: number = 0;
  
  checkoutForm = new FormGroup({ // checkout-form in Cart 
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

  functionTotal() {               // function to calculate totals and discounts
    for (let val of this.cart) {
      this.totalBefore += val.price;
      this.service = this.totalBefore * 0.1;
      this.totalAfter = this.totalBefore + this.service;
      
      this.total = this.totalBefore + this.service;

      if (this.total > 40) {
        this.discount = this.total * 0.15;
        this.total = this.total - this.discount;
      }
    }
  }

  ngOnInit(): void {
    this.cart = this.CS.getCart();
    this.functionTotal();
  }
}
