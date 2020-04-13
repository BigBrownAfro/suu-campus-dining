import { Component, OnInit } from '@angular/core';
import {Order} from '../Order';
import {Item} from '../Item';
import { DataService } from '../data.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
      if (this.user == this.dataService.allOrders[i].USER_ID) {
        this.orders.push(this.dataService.allOrders[i]);
      }
      
    }
  }

}
