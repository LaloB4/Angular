import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  movieToSearch:string;
  movieResult:any[] = [];
  movieParam:string="";

  constructor(public movieS:MoviesService, public activeRoute:ActivatedRoute) {

        this.activeRoute.params.subscribe(

            params => {
              this.movieParam = params['movie'];
            }

        );

   }

  ngOnInit() {

    if(this.movieParam === 'movie'){
      return;
    }

    this.movieToSearch = this.movieParam;
    this.search();

  }

  search(){

    console.log(this.movieToSearch);
    this.movieS.buscarPelicula(this.movieToSearch).subscribe(
        movies => {
          this.movieResult = movies['results'];
          console.log(this.movieResult);
        }
    );
  }

}
