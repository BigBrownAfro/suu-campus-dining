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

  constructor(private dataService: DataService) {
    console.log("Creating Menu");
    this.items = dataService.allItems;
   }

  ngOnInit(): void {
  }

  addToCart(item:Item){

  }

}
