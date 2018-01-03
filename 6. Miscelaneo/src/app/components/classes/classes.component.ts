import { Component, OnInit } from '@angular/core';
	import { NgClass } from '@angular/common';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alertType:string = 'alert-danger';

  properties:Object = {
    danger:false;
  };

  constructor() { }

  ngOnInit() {
  }

}
