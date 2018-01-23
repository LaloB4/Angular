import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import {ChatService} from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chats: Observable<any[]>;
  constructor(db: AngularFirestore, private cS:ChatService) {
    this.chats = db.collection('chats').valueChanges();
  }

  closeSession(){
    this.cS.logout();
  }

}
