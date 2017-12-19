import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  name:string = "Eduardo";

  myArray:number[] = [0,1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  numberForPercent = 0.234;

  payAmounth = 1234.5;

  person = {
    fistName : "Eduardo",
    lastName: "Barrera",
    telephone: "449 345 5215",
    age: 25,
    address : {
      street: "Salto de los Salado",
      number: 109,
      zipCode: 20190
    }
  };

  promiseValue = new Promise( (resolve, reject) => {

      setTimeout(()=>resolve("Data is coming!"), 3500);
  });

  myDate = new Date('2017-12-18');

  myCompleteName:string = "eduardo bArrEra martíNEZ";

  videoSrcUrl = "BWaTYiTbv7Q";

  convertToPassword:boolean = false;

}
