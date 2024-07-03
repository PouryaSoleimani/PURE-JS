// * INCLUDES ___________________________________________
let str = "POURYA SOLEIMANI"
let strInc=str.includes("P")
console.log(strInc);

// * NEW OBJECT METHODS --> OBJECT ASSIGN ________________________________________
let obj1={
    name : 'POURYA',
    fname : 'SOLEIMANI'
}
let obj2 = {
    age :  30,
    gender : "MALE"
}

let obj3 = Object.assign(obj1,obj2)
console.log(obj1);
console.log(obj3);
// IN THIS CASE OBJ1 WILL BE DIFFERENT FROM THE FIRST FORM OF ITSELF

// * OBJECT ASSIGN WITH {}__________________________________________________________________________________________________
let obj4 = Object.assign({},obj1,obj2)
console.log(obj4);
// IN THIS CASE OBJ1 WILL STAY THE SAME AND WE WILL HAVE A NEW OBJECT WHICH IS THE MIX OF TWO PREVIOUS OBJECTS
