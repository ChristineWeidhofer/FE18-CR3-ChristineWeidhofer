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
  cart: Array<IDish> = [];
  
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

  ngOnInit(): void {
    this.cart = this.CS.getCart();
  }

}
