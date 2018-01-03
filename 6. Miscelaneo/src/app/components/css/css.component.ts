import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      HTML element from app-css component (TS)
    </p>
  `,
  styles: [`

    p{
      font-size: 20px;
    }

  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
