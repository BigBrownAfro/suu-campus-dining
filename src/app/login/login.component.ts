import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  failedLogin:boolean;
  failedAttempts:number;

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.failedLogin = false;
    this.failedAttempts = 0;
  }

  //Attempts login using the data service with the username and password text fields
  login(userField:HTMLInputElement, passField:HTMLInputElement){
    let username = userField.value;
    let password = passField.value;
    let successfulLogin = this.dataService.login(username, password);
    if(successfulLogin){
      this.router.navigateByUrl("restaurant");
    }else{
      this.failedLogin = true;
      this.failedAttempts += 1;
    }
    console.log(username + " " + password);
  }

  //Attempts login info if the enter key is pushed
  onKey(event:KeyboardEvent, userField:HTMLInputElement, passField:HTMLInputElement){
    if(event.key == "Enter"){
      this.login(userField, passField);
    }
  }

}
