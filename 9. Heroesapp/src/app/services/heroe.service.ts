import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable()
export class HeroeService {

  heroeURL:string = "https://heroesapp-f1eb2.firebaseio.com/heroe.json";
  singleHeroe:string = "https://heroesapp-f1eb2.firebaseio.com/heroe";

  constructor(private http:Http) { }

  insertHeroe(heroe:Heroe){

      let body = JSON.stringify(heroe);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this.http.post(this.heroeURL, body, {headers})
          .map( response => {
              console.log(response.json());
              return response.json();
          })
  }

  updateHeroe(heroe:Heroe, key$:string){

      let body = JSON.stringify(heroe);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      let url = `${this.singleHeroe}/${key$}.json`;

      return this.http.put(url, body, {headers})
          .map( response => {
              console.log(response.json());
              return response.json();
          })
  }

  getHeroe(key$:string){

    let url = `${this.singleHeroe}/${key$}.json`;
    return this.http.get(url)
      .map(
        res => res.json();
      );

  }

  getHeroes(){

    return this.http.get(this.heroeURL)
      .map(
        res => res.json();
      );
  }

  deleteHeroe(key$:string){

    let url = `${this.singleHeroe}/${key$}.json`;
    return this.http.delete(url)
      .map(
        res => res.json();
      );
  }

}
