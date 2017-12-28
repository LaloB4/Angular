import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  term:string = '';

  constructor(public spotifyService:SpotifyService) {}

  searchArtist(){

    if(this.term.length == 0){
      return;
    }

    this.spotifyService.getArtist(this.term).subscribe();
  }
}
