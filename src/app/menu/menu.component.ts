import { Component, OnInit } from '@angular/core';
import {Item} from '../Item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items:Item[];
  restaurant:String;

  constructor(private dataService: DataService) {
    console.log("Creating Menu");
    this.items = dataService.allItems;
    this.restaurant = dataService.selectedRestaurant;

    this.filterItemsByRestaurant();
  }

  ngOnInit(): void {
  }

  addToCart(item:Item){
    this.dataService.addToCart(item);
  }

  filterItemsByRestaurant(){
    this.items = [];
    let allItems = this.dataService.allItems;
    for (let i = 0; i < allItems.length; i++) {
      let item = allItems[i];
      if(item.store_name == this.restaurant){
        this.items.push(item)
      }
    }
  }

}
