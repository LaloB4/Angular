import { Component, OnInit} from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{

  messageContent:string = "";
  element:any;

  constructor(public cS:ChatService) {

    this.cS.loadMessages()
          .subscribe( () => {
              setTimeout(() => {
                  this.element.scrollTop = this.element.scrollHeight;
              }, 20)
            }
          )
   }

   ngOnInit(){
     this.element = document.getElementById('app-mensajes');
   }

  sendMessage(){
    console.log(this.messageContent);

    if(this.messageContent.length === 0){
      return;
    }

    this.cS.addMesssage(this.messageContent)
        .then(() => {
          this.messageContent = "";
        })
        .catch((error) => {
          console.error("Error sending message", error);
        })

  }
}
