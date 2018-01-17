import { Component, OnInit } from '@angular/core';
import {Heroe} from '../../interfaces/heroe.interface';
import {NgForm} from '@angular/forms';
import {HeroeService} from '../../services/heroe.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe = {
    name:"",
    house:"Marvel",
    bio:""
  }

  id:string;
  createUser:boolean=false;

  constructor(private heroeService:HeroeService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {

    this.activatedRoute.params
      .subscribe( params => {

            this.id = params['id']

            if(this.id !== 'new'){

              this.heroeService.getHeroe(this.id)
                  .subscribe(heroeData => this.heroe = heroeData)
            }
        }
    );
  }

  ngOnInit() {

  }

  postData(){

    console.log(this.heroe);

    if(this.id == 'new'){
      //New record
      this.heroeService.insertHeroe(this.heroe).subscribe(
        data => {
          this.router.navigate(['/heroe', data.name]);
        }
      );

    }else{
      //Existing record
      this.heroeService.updateHeroe(this.heroe, this.id).subscribe(
        data => {
          this.router.navigate(['/heroe', this.id]);
        }
      );

    }
  }

  createNewHeroe(form:NgForm){

    this.router.navigate(['/heroe','new']);
    form.reset({
      house:"Marvel",
    });


  }

}
