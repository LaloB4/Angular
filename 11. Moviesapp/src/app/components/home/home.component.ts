import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  currentMovies:any[] = [];
  popularMovies:any[] = [];
  kidMovies:any[]=[];

  constructor(public movieS:MoviesService) {

      this.movieS.getCurrentMovies().subscribe(
        res => {
          this.currentMovies = res['results'];
        }
      )

      this.movieS.getPopulares().subscribe(
        res => {
          this.popularMovies = res['results'];
          console.log("These are the popular movies", this.popularMovies);
        }
      )

      this.movieS.getKidsMovies().subscribe(
        res => {
          this.kidMovies = res['results'];
        }
      )
   }

  ngOnInit() {
  }

}
