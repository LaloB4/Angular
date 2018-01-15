import { Component} from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  form:FormGroup;

  userData:Object = {
    fullName:{
      firstName:"Eduardo",
      lastName:"Barrera"
    },
    email:"ing_e.barrera@outlook.com",
    hobbies:["Read","Watch movies","Travel"]
  };

  constructor() {

    console.log(this.userData);

    this.form = new FormGroup({

      'fullName':new FormGroup({
        'firstName': new FormControl('',[Validators.required, Validators.minLength(3)]),
        'lastName': new FormControl('',Validators.required)
      }),
      'email': new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'hobbies': new FormArray([
        new FormControl('Code', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.checkNickName),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })

    this.form.controls['password2'].setValidators([
      Validators.required,
      this.isSamePassword.bind(this.form);
    ]);

    //this.form.setValue(this.userData);
   }

   checkNickName(control:FormControl):Promise<any> | Observable<any>{

        let promesa = new Promise(

            (resolve, reject) => {

                setTimeout(()=> {

                  if(control.value === 'admin'){
                    resolve({uNameUsed:true})
                  }else{
                    resolve(null)    
                  }

                  },3000
                )
            }
        )

        return promesa;
   }

   isSamePassword(control:FormControl):{[s:string]:boolean}{

     let theControl:any = this;

     if(control.value !== theControl.controls['password1'].value){
       return {
         passwordError:true
       }
     }

     return null;

   }

   addNewHobbie(){
     (<FormArray>this.form.controls['hobbies']).push(
       new FormControl('', Validators.required)
     )
   }

   postData(){
     console.log(this.form);
     console.log(this.form.value);

     this.form.reset({
         fullName:{
           firstName:"",
           lastName:""
         },
         email:""
       }
     );
   }
}
