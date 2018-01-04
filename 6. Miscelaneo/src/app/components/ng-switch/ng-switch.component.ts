import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {

  message:string="noValidOption";

  constructor() { }

  ngOnInit() {
  }

}
