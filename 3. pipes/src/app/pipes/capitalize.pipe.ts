import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeString'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, allWordsCaps:boolean = true){

    let nameToChange:string = value.toLowerCase();

    let arrayFullName = nameToChange.split(" ");

    if(allWordsCaps) {

      for(let i in arrayFullName){
        arrayFullName[i] = arrayFullName[i][0].toUpperCase() + arrayFullName[i].substr(1);
      }

    }else {
      arrayFullName[0] = arrayFullName[0][0].toUpperCase() + arrayFullName[0].substr(1);
    }

    return arrayFullName.join(" ");
  }
}
