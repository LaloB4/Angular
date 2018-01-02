import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WishListService} from '../../app/services/whish-list.service';
import {List, ListItem} from '../../app/classes';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-detail',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {

  indexItem:number;
  list:List;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              public wLService:WishListService,
              public alertCtrl: AlertController) {

      this.indexItem = navParams.get("i");
      this.list = navParams.get("list");
  }

  ngOnInit() {}

  changeStatus(listItem:ListItem){

    listItem.finished = !listItem.finished;

    let allItemsFinished = true;

    for(let item of this.list.items){
      if(!item.finished){
        allItemsFinished = false;
      }
    }

    this.list.finished = allItemsFinished;

    this.wLService.updateData();

  }

  deleteList(){

      let confirm = this.alertCtrl.create({
        title: 'Delete list?',
        message: 'Do you really want to delete this list? List will be deleted permanently.',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              console.log('Disagree clicked');

            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Agree clicked');
              //Method from Service to delete the task by index
              this.wLService.deleteListById(this.indexItem);
              this.navCtrl.pop();

            }
          }
        ]
      });
      confirm.present();

  }

}
