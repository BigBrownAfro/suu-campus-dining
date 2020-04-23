import { Component, OnInit } from '@angular/core';
import {Order} from '../Order';
import {Item} from '../Item';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  orders:Order[];
  items:Item[];
  user:String;

  constructor(private dataService: DataService, private router:Router) {
    this.orders = dataService.allOrders;
    this.items = dataService.allItems;
    this.user = dataService.userId;

    this.populateOrders();
   }

  ngOnInit(): void {

  }

  //Add an item from a previous order to the cart
  addToCart(order:Order){
    //Find the item based on the items id given by the order
    let item = this.dataService.findItemById(order.ITEM_ID);
    //If the item was found
    if(item){
      //Add the item to the cart
      this.dataService.addToCart(item);
    }
  }

  removeFromFavorites(order:Order){
    this.dataService.removeOrderAsFavorite(order);
    this.populateOrders();
  }

  populateOrders(){
    this.orders = [];
    for (let i = 0; i < this.dataService.allOrders.length; i++) {
      if (this.user == this.dataService.allOrders[i].USER_ID && this.dataService.allOrders[i].is_favorite == "TRUE") {
        this.orders.push(this.dataService.allOrders[i]);
      }
      
    }
  }
}
