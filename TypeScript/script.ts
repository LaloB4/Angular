//console.log("It works, from typescript :D!");

/********************************
********Tipos de datos***********
*********************************/

function sayHello(nombre:string){
    return "Hi " + nombre;
}

let person = {
    name:"Eduardo",
    lastName:"Barrera",
    age:25
};

//console.log(sayHello(person.name));

/********************************
****Temlate literales del ES6****
*********************************/

function getPersonInfo(name:string, lastName:string, age:number){
    return `Nice to meet you ${name} ${lastName}, your age is ${age}`;
}

//console.log(getPersonInfo(person.name, person.lastName, person.age));

/*************************************************************
*Funciones, parametros obligatorios, opcionales y por defecto*
**************************************************************/

function canDrive(age:number, name?:string,licence:boolean=false){

  let userName = (name != undefined) ? name : "user" ;

  if(age >= 18){
    if(licence){
        console.log(`${userName}, you have the age and legal rights to drive!`);
    }else{
      console.log(`${userName}, you have the age but you should not drive due to legal rights!`);
    }
  }else{
    console.log(`${userName}, do not even think it!`);
  }
}

let myData = {
  name:"Lalo",
  age:25,
  licence:true
};

//canDrive(myData.age, myData.name);

/**********************
*Funciones de flecha*
************************/

let myFunction = (name:string) => {
  let message = `This is the param ${name}`;
  return message;
};

//console.log(myFunction("Lalo"));

/*************************************^
*Destructuracion de objetos y arreglos*
***************************************/
 let user = {
   fName:"Eduardo",
   lName : "Barrera",
   hobbie: "Drums",
   userAge: 25,
   getMarried:false
 }

 let {fName,getMarried}  = user;

//console.log(getMarried,fName);

let myArray:string[] = ["Mazda2","Vento","Sonic"];

let [desiredCar,thirdOption,secondOption] = myArray;

//console.log(secondOption);

/*************************************^
*Promesas en ES6*
***************************************/

//console.log("Alert 1");

let myPromise1 = new Promise(function(resolve, rejected){

  setTimeout(() => {
    //console.log("Promise finished");
    resolve();
  }, 1500);

});

//console.log("Alert 2");

myPromise1.then(function(){
    //console.log("Function executed correctly!");
},function(){
    //console.log("Function NOT executed correctly!");
});

//console.log("Alert 3");

/*************************************
*Interfaces en TypeScript*
***************************************/

interface Teams{
  name:string,
  noOnTable:number
}

function showDetails(team:Teams){
  console.log(team.name + ", " + team.noOnTable);
}

let pumas:Teams = {
  name: "UNAM",
  noOnTable:1
};

//showDetails(pumas);
