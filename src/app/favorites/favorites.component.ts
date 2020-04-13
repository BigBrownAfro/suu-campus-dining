import { Component, OnInit } from '@angular/core';
import {Order} from '../Order';
import {Item} from '../Item';
import { DataService } from '../data.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  orders:Order[];
  items:Item[];
  user:String;

  constructor(private dataService: DataService) {
    this.orders = dataService.allOrders;
    this.items = dataService.allItems;
    this.user = "elijahwilliams2";
    this.populateOrders();
   }

  ngOnInit(): void {
  }

  addToCart(order:Order){

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
