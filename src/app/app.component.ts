import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suu-campus-dining';

  _opened: boolean = false;

  constructor(private dataService: DataService, private router:Router) {
    //If the user is not logged in just send them to the sign in page
    if(!dataService.isSignedIn){
      router.navigateByUrl("login");
    }
  }
  
  public _toggleSidebar(){
    if(this.dataService.isSignedIn){
      this._opened = !this._opened;
    }
  }
}
