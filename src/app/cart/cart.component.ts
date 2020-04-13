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

  constructor(private dateService:DataService) {
    this.items = [];
    this.populateCart();
  }

  ngOnInit(): void {
  }

  populateCart(){
    this.items = this.dateService.itemsInCart;
  }

  removeFromCart(item:Item){
    this.dateService.removeFromCart(item);
    this.items = this.dateService.itemsInCart;
  }
}
