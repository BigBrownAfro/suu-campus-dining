import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent, 
    SideNavComponent, 
    LoginComponent, 
    FavoritesComponent, 
    HistoryComponent, 
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
