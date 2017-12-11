"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand) {
        this.color = "black";
        this.doorsNumber = 4;
        this.carYear = false;
        this.brand = brand;
    }
    Car.prototype.getCarInfo = function () {
        console.log("Brand: " + this.brand + "\n      Color: " + this.color + "\n      Doors number: " + this.doorsNumber + "\n      Car Year: " + this.carYear);
    };
    return Car;
}());
exports.Car = Car;
