export class Car{

  color:string = "black";
  brand:string;
  doorsNumber:number = 4;
  carYear:boolean = false;

  constructor(brand:string){
    this.brand = brand;
  }

  getCarInfo(){
    console.log(`Brand: ${this.brand}
      Color: ${this.color}
      Doors number: ${this.doorsNumber}
      Car Year: ${this.carYear}`);
  }
}
