import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:Heroe = {};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {

      this.activatedRoute.params.subscribe(
        params => {
          this.heroe = this._heroesService.getHero(params['id']);
          console.log(this.heroe);
        }
      );
  }

}
