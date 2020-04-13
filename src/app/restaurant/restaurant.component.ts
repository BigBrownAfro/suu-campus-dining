import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  selectRestaurant(restaurant:string){
    console.log(restaurant);
    
    this.dataService.chooseRestaurant(restaurant);
    this.router.navigateByUrl("menu");
  }

}
