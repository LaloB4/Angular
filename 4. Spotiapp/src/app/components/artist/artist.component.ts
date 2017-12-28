import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
}
export class ArtistComponent implements OnInit {

  foundArtist:any = {};
  foundTrackResults:any = {};

  constructor(private activeRoute:ActivatedRoute,
              public spotiService:SpotifyService) { }

  ngOnInit() {

    this.activeRoute.params
                  .map(artist => artist['idArtist'])
                  .subscribe(
                    id => {
                        console.log(id)

                        this.spotiService.getSingleArtist(id)
                          .subscribe(artistResult => {
                              console.log(artistResult);
                              this.foundArtist = artistResult;
                          });

                        this.spotiService.getTopTracks(id)
                            .subscribe(trackResults=>{
                              console.log(trackResults);
                              this.foundTrackResults = trackResults;
                            });
                    }
                  );
  }
}
