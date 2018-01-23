import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Message} from '../interfaces/message.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  private chats:Message[] = [];

  private userObj:any={}

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {

      this.afAuth.authState.subscribe(user=>{
          console.log("User state ", user )

          if(!user){
            return;
          }

          this.userObj.name = user.displayName;
          this.userObj.uid = user.uid;
      })
  }

  login(provider:string) {

    switch(provider){

      case 'google':
          this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
          break;

      case 'twitter':
          this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
          break;
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  loadMessages(){
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date','desc').limit(5));
    return this.itemsCollection.valueChanges()
              .map(
                  (messages) => {
                    console.log(messages);

                    this.chats = [];

                    for(let message of messages){
                      this.chats.unshift(message);
                    }

                    return this.chats;
                    //this.chats = messages;
                  }
              );
  }

  addMesssage(messageToAdd:string){

    let message:Message = {
      name:this.userObj.name,
      message:messageToAdd,
      date: new Date().getTime(),
      uid: this.userObj.uid;

    }

    return this.itemsCollection.add(message);

  }

}
