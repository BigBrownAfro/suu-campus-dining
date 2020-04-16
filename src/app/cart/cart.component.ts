import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Item[];
  cartTotal:number;

  constructor(private dataService:DataService) {
    this.items = [];

    this.populateCart();

    this.cartTotal = dataService.getCartTotal();
  }

  ngOnInit(): void {
  }

  populateCart(){
    this.items = this.dataService.itemsInCart;
  }

  removeFromCart(item:Item){
    this.dataService.removeFromCart(item);
    this.items = this.dataService.itemsInCart;
    this.cartTotal = this.dataService.getCartTotal();
  }
}
