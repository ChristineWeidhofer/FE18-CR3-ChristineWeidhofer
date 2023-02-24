import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { dishes, IDish } from '../dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dishes: Array<IDish> = dishes;

  constructor(private CS: CartService) {}

  addToCart(dish: IDish) {
    alert("Your dish was added to your cart");
    this.CS.addToCart(dish);
  }

}
