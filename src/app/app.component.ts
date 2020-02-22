import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suu-campus-dining';

  _opened: boolean = false;
  
  public _toggleSidebar(){
    this._opened = !this._opened;
  }
}
