class Car {
  constructor(make, model, color) {
    this.make = make
    this.model = model
    this.color = color
  }
}

// ^ USING REFLECT.CONSTRUCT -------------------------------------
// let carObj = new Car("BMW","M4")
// console.log(carObj);
let carObj = Reflect.construct(Car, [ "BMW", "M4", "BLACK" ])
console.log(carObj);

// ^ REFLECT.DEFINEPROPERTY -------------------------------------
let obj = {
  name: "Pourya"
}
Reflect.defineProperty(obj, `family`, { value: 'SOLEIMANI', })
console.log(obj);

// ^ REFLECT.DELETEPROPERTY ------------------------------------
Reflect.deleteProperty(obj, `name`)
console.log(obj);

// ^ REFLECT.GET -----------------------------------------------
console.log(Reflect.get(obj, `family`));

let arr = [ 10, 20, 30, 40, 50, 60 ]
console.log(Reflect.get(arr, 1));

// ^ REFLECT.HAS -----------------------------------------------
console.log(Reflect.has(obj, `name`));

// ^ REFLECT.SET -----------------------------------------------
Reflect.set(obj, "age", "26")
console.log(obj);

// ^ REFLECT.OWNKEYS -------------------------------------------
console.log(Reflect.ownKeys(obj));

// ^ REFLECT.isEXTENSIBLE --------------------------------------
// ^ REFLECT.PREVENTEXTENSION ----------------------------------


