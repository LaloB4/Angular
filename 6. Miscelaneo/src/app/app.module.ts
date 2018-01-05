import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { HighligthedDirective } from './directives/highligthed.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {APP_ROUTING} from './app.routes';
import { UserComponent } from './components/users/user.component';
import { UsernewComponent } from './components/users/usernew.component';
import { UserdetailsComponent } from './components/users/userdetails.component';
import { UserdeleteComponent } from './components/users/userdelete.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    HighligthedDirective,
    NgSwitchComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    UsernewComponent,
    UserdetailsComponent,
    UserdeleteComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
