import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, details?: boolean = false): string {

    let baseUrl:string = "http://image.tmdb.org/t/p/w";
    let imageUrl:string = "";

    if(value){

      //image IS available
      let imageSize:string="";

      if(details){
          imageSize = '500';
      }else{
          imageSize = '300';
      }

      imageUrl = `${baseUrl}${imageSize}${value}`;

    }else{
      imageUrl = "assets/img/noimage.png";
    }

    return imageUrl;

  }

}
