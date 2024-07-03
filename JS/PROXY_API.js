class Car {
    constructor(make, model, color) {
        this.make = make
        this.model = model
        this.color = color
    }
}
let myCar = new Car("BMW", "M3", "BLACK")
console.log(myCar);

let handler = {
    get(myCar, propkey) {
        return propkey in myCar ? myCar[propkey] : "Property Doesnt Exist !"
    }
}
let proxy = new Proxy(myCar, handler)
console.log(proxy);
console.log(proxy.make);
console.log(proxy.model);
console.log(proxy.color);


let myMap = new Map()

let name = "PORIA"
myMap.set("fname",name)
myMap.set("family","Soleimani")
console.log(myMap);

myMap.forEach((value,key)=>{
    console.log(key,value);
})

