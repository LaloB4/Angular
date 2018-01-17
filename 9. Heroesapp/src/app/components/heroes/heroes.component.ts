import { Component, OnInit } from '@angular/core';
import {HeroeService} from '../../services/heroe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean=true;

  constructor(private service:HeroeService,
              private router:Router) {

      this.service.getHeroes()
        .subscribe( data => {

            console.log(data);
            this.service.getHeroes()
                .subscribe( heroesData => {

                  this.heroes = heroesData;
                  this.loading = false;
                })

        })

   }

  ngOnInit() {
  }

  deleteHeroe(key$:string){

    console.log(key$);
    this.service.deleteHeroe(key$)
      .subscribe(
        result => {
          console.log(result);
          if(result){
            console.error(result);
          }else{
            delete this.heroes[key$];
          }
        }
      )
  }
}
