import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  constructor(public spotifyService:SpotifyService) {
    this.spotifyService.getArtist().subscribe(
      artists => {
        console.log('Information retrieved!');
        console.log(artists);
      };
    );
  }

}
