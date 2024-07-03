// ! OLD WAY WITH CONSTRUCTOR FUNCTION _____________________________________________________________________
// function carMaker(make, model, color) {
//   (this.make = make), (this.model = model), (this.color = color);
// }
// let newCar = new carMaker(`bmw`, `m3`, `black`);
// console.log(newCar);

//  * WITH CLASSES _______________________________________________________________________________

class CARMAKER {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
}
let myCar2 = new CARMAKER("benz", "c200", "white");
console.log(myCar2);
// ________________________________________________________________________________________________
class personMaker {
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }
}
let myPerson = new personMaker("pourya", "soleimani", "30");
console.log(myPerson);
// * INHERITANCE IN CLASSES ___________________________________________________________________________________
class CARMAKER {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  run() {
    console.log("LETS START!");
  }
}
let myCar22 = new CARMAKER("benz", "c200", "white");
console.log(myCar2);
// ~ ____________________________________________________________________________________________________
class CARMAKER2 extends CARMAKER {
  constructor(make, model, color, hp) {
    super(make, model, color);
    this.hp = hp;
  }
  fly() {
    return "OK LETS FLY !";
  }
}
let myNewCar = new CARMAKER2("dodge", "challenger", "green", "715");
console.log(myNewCar);
console.log(myNewCar.fly());

// _____________________________________________________________________________
class CARMAKER3 extends CARMAKER {
  constructor(make, model, color, hp) {
    super(make, model, color);
    this.hp = hp;
  }
  start() {
    return "THE CAR HAS JUST STARTED !";
  }
}
let myNewCar2 = new CARMAKER3("Peogeot", "206", "black", "125");
console.log(myNewCar2);
// * REVIEW ____________________________________________________________________________________________
class bikeMaker {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  run() {return ` LETS RUN THE BIKE !`;}
}
let myBike = new bikeMaker("bmw", "r32", "black");
console.log(myBike);

// INHERITANCE _____________________________________________________________________________________
class bikeMaker2 extends bikeMaker {
  constructor(make , model , color , hp){
    super(make,model,color)
    this.hp = hp
  }
  run2(){return ` NOW WE ARE RUNNING !`}
}
let myBike2 = new bikeMaker2(`suzuki`,`biking`,`red`,`530`)
console.log(myBike2);
console.log(myBike2.run());
console.log(myBike2.run2());

//  * ADVANCED ARRAYS ________________________________________________________________________________

class advancedArray extends Array{
find(value){
  let val = this.filter(item => item = value ); 
  return val.length === 0 ? 'error' : val
}
}

let list = new advancedArray('pouria','reza','hesam')
console.log(list.find('p'));