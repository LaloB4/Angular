export class Person{

  firstName:string;
  lastName:string;
  age:number;
  gender:string;
  finishSchool:boolean = true;

  constructor(firstName:string, lastName:string, gender:string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  getBasicPersonInfo(){
    console.log(`First Name: ${this.firstName}
    Last Name: ${this.lastName}
    Gender: ${this.gender}
    School finished? ${this.finishSchool}`);
  }
}
