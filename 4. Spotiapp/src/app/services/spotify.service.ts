import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any = [];

  constructor(public http:HttpClient) {
      console.log("Spotify Service is ready!");
   }

   getArtist(){
     let url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&offset=0&limit=20';
     let headers =  new HttpHeaders({
       authorization:'Bearer BQCKbXsqI94ts1td3hyMysi9WbGlH9-yyBwpIn8AScZUFyuYMOvCn4OwQJ8Oqv9zIyc9eQ-3UJE7WpVvlHM';
     });
     return this.http.get(url, {headers}).map(
          (result:any) => {
            this.artists = result.artists.items;
            return this.artists;
          };
     );
   }
}
