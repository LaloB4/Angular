import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize.px]="fontSizeDisplay">
      Testing ngSyle directive...lets do it!
    </p>

    <button class="btn btn-primary" (click) = "increaseTextSize()">
      <i class="fa fa-plus" aria-hidden="true" fa-lg></i>
    </button>

    <button class="btn btn-primary" (click) = "decreaseTextSize()">
      <i class="fa fa-minus" aria-hidden="true" fa-lg></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  fontSizeDisplay:number = 10;

  constructor() { }

  ngOnInit() {
  }

  increaseTextSize(){
    this.fontSizeDisplay += 10;
  }

  decreaseTextSize(){
    this.fontSizeDisplay -= 10;
  }



}
