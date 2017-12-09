//console.log("It works, from typescript :D!");
/********************************
********Tipos de datos***********
*********************************/
function sayHello(nombre) {
    return "Hi " + nombre;
}
var person = {
    name: "Eduardo",
    lastName: "Barrera",
    age: 25
};
//console.log(sayHello(person.name));
/********************************
****Temlate literales del ES6****
*********************************/
function getPersonInfo(name, lastName, age) {
    return "Nice to meet you " + name + " " + lastName + ", your age is " + age;
}
//console.log(getPersonInfo(person.name, person.lastName, person.age));
/*************************************************************
*Funciones, parametros obligatorios, opcionales y por defecto*
**************************************************************/
function canDrive(age, name, licence) {
    if (licence === void 0) { licence = false; }
    var userName = (name != undefined) ? name : "user";
    if (age >= 18) {
        if (licence) {
            console.log(userName + ", you have the age and legal rights to drive!");
        }
        else {
            console.log(userName + ", you have the age but you should not drive due to legal rights!");
        }
    }
    else {
        console.log(userName + ", do not even think it!");
    }
}
var myData = {
    name: "Lalo",
    age: 25,
    licence: true
};
//canDrive(myData.age, myData.name);
/**********************
*Funciones de flecha*
************************/
var myFunction = function (name) {
    var message = "This is the param " + name;
    return message;
};
//console.log(myFunction("Lalo"));
/*************************************^
*Destructuracion de objetos y arreglos*
***************************************/
var user = {
    fName: "Eduardo",
    lName: "Barrera",
    hobbie: "Drums",
    userAge: 25,
    getMarried: false
};
var fName = user.fName, getMarried = user.getMarried;
//console.log(getMarried,fName);
var myArray = ["Mazda2", "Vento", "Sonic"];
var desiredCar = myArray[0], thirdOption = myArray[1], secondOption = myArray[2];
//console.log(secondOption);
/*************************************^
*Promesas en ES6*
***************************************/
