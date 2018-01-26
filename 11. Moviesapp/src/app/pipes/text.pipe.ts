import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: any): string {

    let text:string="";

    if(value){
      return value;
    }

    text="No description available"

    return text;
  }

}
