import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, toConvert:boolean = true): String {

    let converted:string= value;
    let passFormat:string = '';

    let lengthString:number = converted.length;

    if(toConvert){

      for(let i = 0; i < lengthString; i++){
        passFormat += '*';
      }
      converted = passFormat;
    }

    return converted;
  }

}
