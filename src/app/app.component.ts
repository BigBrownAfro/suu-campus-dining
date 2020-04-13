import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'suu-campus-dining';

  _opened: boolean = false;

  constructor(private dataService: DataService) { }
  
  public _toggleSidebar(){
    this._opened = !this._opened;
  }
}
