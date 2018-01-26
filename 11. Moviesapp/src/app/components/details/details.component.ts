import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {

  movieToSee:any[]=[];
  pageFrom:string="";
  movieText:string="";
  movieSearchTerm:string="";

  constructor(public activeR:ActivatedRoute, public movieS:MoviesService, public myRouter:Router) {

      this.activeR.params.subscribe(

        params => {
          //console.log(params['title']);
          this.pageFrom = params['from'];
          this.movieText = params['title'];
          this.movieSearchTerm = params['param'];

          this.movieS.buscarPelicula(this.movieText).subscribe(

            movie=>{
              this.movieToSee = movie['results'][0];
              console.log(this.movieToSee);
              console.log(this.pageFrom);
            }

          );
        }

      );

   }

  ngOnInit() {
  }


  backTo(){

    switch(this.pageFrom){

      case '1':
          this.myRouter.navigate(['/home']);
          break;

      case '2':
          this.myRouter.navigate(['/search',this.movieSearchTerm]);
          break;

    }

  }

}
