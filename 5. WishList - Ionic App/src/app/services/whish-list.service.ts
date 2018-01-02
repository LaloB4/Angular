import { Injectable } from '@angular/core';
import {List} from '../classes/list';

@Injectable()
export class WishListService {

  listItem:List[] = [];

  constructor() {

    /*
    let l1 = new List('Supermarket');
    let l2 = new List('Courses to take');
    let l3 = new List('Clothes');

    this.listItem.push(l1);
    this.listItem.push(l2);
    this.listItem.push(l3);
    */
    this.getData();
    console.log("WishListService is ready to be implemented!");
   }

   updateData(){

     localStorage.setItem("data", JSON.stringify(this.listItem));
   }

   getData(){
     if(localStorage.getItem("data")){
        this.listItem = JSON.parse(localStorage.getItem("data"));
     }

   }

   addList(list:List){
     this.listItem.push(list);
     this.updateData();
   }

   deleteListById(idx:number){

     this.listItem.splice(idx,1);
     this.updateData();

   }

}
