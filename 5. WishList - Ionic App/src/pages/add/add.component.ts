import { Component, OnInit } from '@angular/core';
import {List, ListItem} from '../../app/classes';
import { AlertController, NavController } from 'ionic-angular';
import {WishListService} from '../../app/services/whish-list.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string = "";
  listItemName:string = "" ;

  items:ListItem[] = [];

  constructor(public wListService:WishListService,
              public alertCtrl:AlertController,
              public navCtrl:NavController) {  }

  ngOnInit() {}

  addMethod(){

    if(this.listItemName.length == 0){
      return;
    }

    let item = new ListItem();
    item.name = this.listItemName;
    item.finished = false;

    this.items.push(item);
    this.listItemName = "";

  }

  deleteMethod(itemIndex:number){

    this.items.splice(itemIndex,1);

  }

  saveList(){

    if(this.listName.length == 0){
      let alert = this.alertCtrl.create({
          title: 'List name is required!',
          subTitle: 'List name must be defined in order to create it, please set one',
          buttons: ['OK']
        });
      alert.present();
      return;
    }

    let list = new List(this.listName);
    list.items = this.items;

    this.wListService.addList(list);
    this.navCtrl.pop();

  }

}
