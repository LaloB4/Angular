import { Component, OnInit } from '@angular/core';
import {WishListService} from '../../app/services/whish-list.service';
import {NavController} from 'ionic-angular';
import {AddComponent} from '../add/add.component';

import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-finished',
  templateUrl: 'finished.component.html',
})
export class FinishedComponent implements OnInit {

  constructor(private wLService:WishListService,
              private navCtrl:NavController) {

   }

  ngOnInit() {}

  showAddListView(){

    this.navCtrl.push(AddComponent);
  }

  showListDetails(list, i){

    this.navCtrl.push(DetailsComponent, {list, i});
  }
}
