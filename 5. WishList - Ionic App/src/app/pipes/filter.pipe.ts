import { Pipe, PipeTransform } from '@angular/core';
import {List} from '../classes/list';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(lists: List[], state: boolean = false): List[] {

    let listsFiltered:List[] = [];

    for(let list of lists){
      if(list.finished == state){
        listsFiltered.push(list);
      }
    }

    return listsFiltered;
  }
}
