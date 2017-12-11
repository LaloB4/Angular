"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, gender) {
        this.finishSchool = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
    Person.prototype.getBasicPersonInfo = function () {
        console.log("First Name: " + this.firstName + "\n    Last Name: " + this.lastName + "\n    Gender: " + this.gender + "\n    School finished? " + this.finishSchool);
    };
    return Person;
}());
exports.Person = Person;
