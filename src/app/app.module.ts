import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [BrowserModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
