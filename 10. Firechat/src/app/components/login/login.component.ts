import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private cS:ChatService) { }

  ngOnInit() {
  }

  signIn(provider:string){
    this.cS.login(provider);
  }

}
