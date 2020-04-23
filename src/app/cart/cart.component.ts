import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { DataService } from '../data.service';
import { Order } from '../Order';

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

  createOrder(){
    if (this.items.length <= 0){
      return;
    }

    var newOrder:Order = new Order();

    
    let date:Date = new Date();

    newOrder.ORDER_ID = "O_" + this.dataService.userId + this.cartTotal + date.getMilliseconds();
    newOrder.USER_ID = this.dataService.userId;
    newOrder.ITEM_ID = this.items[0].ITEM_ID;


    newOrder.date = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    newOrder.final_price = this.cartTotal;
    newOrder.is_favorite = "FALSE";

    this.dataService.allOrders.push(newOrder);

    this.dataService.itemsInCart = [];

    this.items = [];
    this.cartTotal = 0;
  }
}
