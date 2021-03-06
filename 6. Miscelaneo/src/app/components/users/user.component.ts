import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute) {

    this.actRoute.params.subscribe(
      params => {
        console.log("Params from child path");
        console.log(params);
      }
    );

   }

  ngOnInit() {
  }

}
