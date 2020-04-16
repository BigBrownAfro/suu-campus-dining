import { Injectable, DebugElement } from '@angular/core';
import { Item } from './Item';
import { User } from './User';
import { Order } from './Order';
import * as itemData from '../assets/item.json'
import * as userData from '../assets/user.json'
import * as orderData from '../assets/order.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemJson:any = (itemData as any).default;
  userJson:any = (userData as any).default;
  orderJson:any = (orderData as any).default;

  allItems:Item[];
  allUsers:User[];
  allOrders:Order[];

  userId:string;
  selectedRestaurant:string;
  itemsInCart:Item[];

  isSignedIn:boolean;

  constructor() {
    console.log("Creating Data Service");
    this.allItems = [];
    this.allUsers = [];
    this.allOrders = [];

    this.retrieveAllItems();
    this.retrieveAllUsers();
    this.retrieveAllOrders();

    this.userId = "";
    this.selectedRestaurant = "";
    this.itemsInCart = [];
    this.isSignedIn = false;
  }

  private retrieveAllItems(){
    var json = this.itemJson

    for (let i = 0; i < json.length; i++) {
      this.allItems.push(Item.from(json[i]));
      //console.log(this.allItems[i].item_name);
    }
  }

  private retrieveAllUsers(){
    var json = this.userJson

    for (let i = 0; i < json.length; i++) {
      this.allUsers.push(User.from(json[i]));
      //console.log(this.allUsers[i].USER_ID);
    }
  }

  private retrieveAllOrders(){
    var json = this.orderJson

    for (let i = 0; i < json.length; i++) {
      this.allOrders.push(Order.from(json[i]));
      //console.log(this.allOrders[i].final_price);
    }
  }

  login(id:string, pass:string):boolean{
    var verified = false;
    //For each user in the database
    for(var i = 0; i < this.allUsers.length; i++){
      let i_user = this.allUsers[i];
      //Check to see if the id entered matches an existing user
      if(i_user.USER_ID.toLowerCase() == id.toLowerCase()){
        //Verify the password entered matches the password tied to that user
        if(i_user.password == pass){
          //Sign in the user
          verified = true;
          this.isSignedIn = true;
          this.userId = i_user.USER_ID;
        }
      }
    }
    //Return whether or not the user was signed in
    return verified;
  }

  chooseRestaurant(restaurant:string){
    this.selectedRestaurant = restaurant;
  }

  addToCart(item:Item):number{
    return this.itemsInCart.push(item);
  }

  removeFromCart(item:Item){
    var newItems:Item[] = []; //An item list that will hold the remaining items after removal
    var removed:boolean = false; //boolean stating whether or not the item to remove was accounted for

    //for every item in the cart
    for(var i = 0; i < this.itemsInCart.length; i++){
      //If the item in cart is not the one to be removed
      if (this.itemsInCart[i].ITEM_ID != item.ITEM_ID){
        //put the item in the new list
        newItems.push(this.itemsInCart[i]);
      //If the item in the cart has the same name as the item to remove but a copy has already been removed
      }else if (removed){
        //put the item in the new list
        newItems.push(this.itemsInCart[i])
      //If the item is the one that needs to be removed
      }else{
        //Don't add it to the new list
        removed = true;
      }
    }

    this.itemsInCart = newItems;
  }

  getCartTotal():number{
    var total:number = 0;
    for (let i = 0; i < this.itemsInCart.length; i++) {
      total += this.itemsInCart[i].price;
      console.log("item price: " + total);
    }
    return total;
  }

  findItemByName(itemName:string):Item{
    for(var i = 0; i < this.allItems.length; i++){
      var i_item = this.allItems[i];
      
      if(i_item.item_name == itemName){
        return i_item;
      }
    }

    return null;
  }

  findItemById(itemId:string):Item{
    for(var i = 0; i < this.allItems.length; i++){
      var i_item = this.allItems[i];
      
      if(i_item.ITEM_ID == itemId){
        return i_item;
      }
    }

    return null;
  }

  markOrderAsFavorite(order:Order){
    for(var i = 0; i < this.allOrders.length; i++){
      var i_order = this.allOrders[i];
      if(i_order.ORDER_ID == order.ORDER_ID){
        i_order.is_favorite = "TRUE";
      }
    }
    //var data = JSON.stringify(this.allOrders);
    //var fs = require("fs");
    //fs.writeFile("newOrders.json", data);
    console.log(JSON.stringify(this.allOrders));
  }
}
