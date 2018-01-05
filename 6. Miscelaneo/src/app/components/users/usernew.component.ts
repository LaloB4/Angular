import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usernew',
  template: `
    <p>
      usernew works!
    </p>
  `,
  styles: []
})
export class UsernewComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute) {

    this.actRoute.parent.params.subscribe(
      params => {
        console.log("Params from parent path");
        console.log(params);
      }
    );

   }

  ngOnInit() {
  }

}
