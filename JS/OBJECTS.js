//^ *************************************************** OBJECTS ********************************************************************
// 1. DECLARING AN OBJECT -----------------------------------------------------------------------------------
let myCar = {
  make: `BMW`,
  model: `M3`,
  horsepower: 625,
  options: [`abs`, `sunroof`, `heater`, `Mpack`],
  run: function () { console.log(`THIS IS A TEST FOR MY OBJECT !!!`); },
  Rims: "BLACK",
};
// 2. GETTING AN OBEJCT'S VALUE ------------------------------------------------------------------------------------
let carName = myCar.make;
console.log(carName + " " + myCar.model);
console.log(myCar.horsepower);

// 3. SETTING OR CHANGING AN OBEJCT'S VALUE ------------------------------------------------------------------------------------
myCar.horsepower = 780
console.log(myCar.horsepower);

myCar.color = `Matte Black`
console.log(myCar.color);

console.log(myCar.rims);

// 4. USING A FUNCTION IN AN OBJECT ----------------------------------------------------------------------------------
let testObject = {
  function() { console.log(`HELLO WORLD`); }
}
testObject.function()
// OUTPUT --> HELLO WORLD !

// 5. USING OBJECT'S OTHER KEYS BY OBJECT'S FUNCTION ( THIS ) ----------------------------------------------
let testObject2 = {
  firstName: `Pourya`,
  lastName: `Soleimani`,
  Age: `30 Years Old`,
  Job: `Web Developer`,
  function() {
    console.log(this.firstName + ' ' + this.lastName + ` ` + this.Age + " " + this.Job);
  }
  // OUTPUT --> Pourya Soleimani 30 Years Old Web Developer
}
testObject2.function()
// 6. CREATING AN OBJECT - SECOND WAY ----------------------------------------------------------------------
let obj = new Object();
obj.first = `majid`
obj.last = `kalhor`
console.log(obj);

console.log(myCar.options[3]);

// 7. CONSTRUCTOR FUNCTIONS ------------------------------------------------------------------------
//  CREATING AN OBJECT USING A FUNCTION ------------------------------------------------------------
function myCar2() {

}
let newObj = new myCar2()
newObj.make = `BENZ`
newObj.model = `C63 AMG`
newObj.color = `White`
newObj.type = `Saloon`
newObj.hp = `635 hp`
console.log(newObj);

// CONSTRUCTOR FUNCTIONS ------------------------------------------------------------------------------
function newCar(make, model, color, hp) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.hp = hp;
}

let newCar4 = new newCar("Audi", "A1", "BLACK", "180 hp")
console.log(newCar4);

//  -------------------------------------------------------------------------------
function newPerson(firstname, lastname, job, age, gender) {
  this.firstname = firstname
  this.lastname = lastname
  this.job = job
  this.age = age
  this.gender = gender
}

let mySelf = new newPerson("pourya", "Soleimani", "Frontend Developer", "30", "Male")
console.log(mySelf);

//  8. PROTOTYPES ------------------------------------------------------------------------

newPerson.prototype.nationality = "GERMAN"
console.log(mySelf);
let myself2 = new newPerson("pouria", "soleimani", "developer", "30 ", "male")
console.log(myself2);

console.log(newPerson);

newPerson.prototype.start = function () {
  console.log("start test");
}
let myself3 = new newPerson("pouria", "soleimani", "programmer", "30", "boy")
console.log(myself3);
// ** OBJECT ARRAYS ----------------------
let constructedArray = new Array(1, 2, 3, 4, 5, 6, 7)
console.log(constructedArray);


// INHERITANCE IN PROTOTYPES ----------------------------------------------------------------------------
let car3 = new newCar("ford", "mustang", "red", "442 hp")
console.log(car3);

let car4 = Object.create(null)
console.log(car4);
let car5 = Object.create(car3);
console.log(car5);


// NEW FEATURES FOR OBJECTS IN ES6  ___________________________________________________
let myName = `Pourya`
let myFullname = `Pourya SOleimani`
let myAge = 'this is my age'
let mySelf4 = {
  myName,
  [myFullname]: `THIS IS MY NAME`,
  [myAge]: 30
}
console.log(mySelf4);
