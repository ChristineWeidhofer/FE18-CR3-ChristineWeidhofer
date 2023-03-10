import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes, IDish } from '../dishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  dish: IDish = {} as IDish;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart() {
    alert("Your dish was added to your cart");
    this.CS.addToCart(this.dish);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.dish = dishes[this.id];
    });
  }
}
