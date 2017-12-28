import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(value: any[]): any {

    let noImage = 'assets/img/noimage.png';

    if(!value){
      return noImage;
    }

    return (value.length > 0)? value[1].url : noImage);
  }

}
