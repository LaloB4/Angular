import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any = [];
  topTracks:any = [];

  spotiUrl:string = 'https://api.spotify.com/v1/';

  authorizationToken:string = 'BQDW6zR_5frKSjfGZffYO0328Z7mMZtlzRIxglxDnNRk4T27ApyJRsqx9Ik-IKBp9lJomRzmGDBz-LvDlAE';

  constructor(public http:HttpClient) {

   }

   getHeaders():HttpHeaders{
     let headers =  new HttpHeaders({
       authorization:'Bearer ' + this.authorizationToken;
     });
     return headers;
   }

   getSingleArtist(id:string){

     let url = `${this.spotiUrl}artists/${id}`;
     let headers = this.getHeaders();
     return this.http.get(url, {headers});/*.map(
          (result:any) => {
            this.artists = result.artists.items;
            return this.artists;
          };
     );*/

   }

   getArtist(term:string){

     let url = `${this.spotiUrl}search?query=${term}&type=artist&offset=0&limit=20`;
     let headers = this.getHeaders();
     return this.http.get(url, {headers}).map(
          (result:any) => {
            this.artists = result.artists.items;
            return this.artists;
          };
     );
   }

   getTopTracks(id:string){

     let url = `${this.spotiUrl}artists/${id}/top-tracks?country=US`;
     let headers = this.getHeaders();
     return this.http.get(url, {headers}).map(
          (result:any) => {
            this.topTracks = result.tracks;
            return this.topTracks;
          };
     );

   }
}
