import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {PendingsComponent} from '../pages/pendings/pendings.component';
import {FinishedComponent} from '../pages/finished/finished.component';

import {AddComponent} from '../pages/add/add.component';

import {DetailsComponent} from '../pages/details/details.component';

//Service

import {WishListService} from './services/whish-list.service';

//Pipes

import {PlaceHolderPipe} from './pipes/placeholder.pipe';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddComponent,
    PlaceHolderPipe,
    FilterPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddComponent,
    DetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
