import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "menu", component: MenuComponent
  },
  {
    path: "menu/:id", component: MenuDetailsComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "**", redirectTo: "" // add wildcard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
