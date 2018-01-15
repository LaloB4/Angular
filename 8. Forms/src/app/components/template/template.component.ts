import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`

    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }

  `]
})
export class TemplateComponent{

  user:Object = {
    firstName:null,
    lastName:null,
    email:null,
    country:"",
    gender:"Man",
    accept:false
  }

  countries:any[] = [
    {
      code:"MX",
      name:"Mexico"
    },
    {
      code:"SP",
      name:"Spain"
    },
    {
      code:"US",
      name:"Unated States"
    },
    {
      code:"BZ",
      name:"Brazil"
    },
    {
      code:"CN",
      name:"Canada"
    },

  ];

  genders:string[] = ["Man","Woman","Undefinied","Another one"];

  constructor() { }

  saveForm(formData:NgForm){
    console.log(formData);
    console.log("Value", formData.value);
    console.log("User", this.user);
  }

}
