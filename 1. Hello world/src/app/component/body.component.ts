import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

  show:boolean = true;

  personalData:any = {
    firstName: "Eduardo",
    lastName: "Barrera",
    age:25,
    gender:"male"
  }

  programmingLanguages:string[]=["Java","Android","JavaScript","PL/SQL"];

}
