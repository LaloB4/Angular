import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private heroeSearch:Hero[] = [];
  heroeToLookFor:string;

  constructor(private _heroesService:HeroesService,
              private _activatedRoute:ActivatedRoute,
              private _router:Router) {
  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(
      params => {
        this.heroeSearch = this._heroesService.searchHero(params['heroeName']);
        this.heroeToLookFor = params['heroeName'];
      }
    );
  }
}
