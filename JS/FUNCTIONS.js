'use strict'
// ** FUNTCIONS
function sayHello(){
    return 'HELLO ROCKET'
}
console.log(sayHello());
 var m = sayHello()
 console.log(m);

 // *** GLOBAL AND LOCAL SCOPES
// 1
 var x = 100
 function say(){
    console.log(x);
 }
say();
console.log("-------------------------------------------------------------");
// 2--------------------------------------------------------------------------------------------------
function test__1(){
    var y = 200
    console.log(y);
    console.log(y);
}
test__1()
 var y = 300
console.log(y);
console.log(y); 
console.log(y);

function sayHelloo(){
    console.log("HELLO EVERYBODY");
}
sayHelloo()

function summm(a , b , c){
    console.log(a + b + c);
}
summm(2 , 3 , 5);

// * ES6 FUNCTIONS _________________________________________
//  ^ GENERATOR FUNCTIONS ___________________
function* nameIterators() {
    yield `pori`
    yield `armin`
    yield `reza`
    return 'hello booys'
}
console.log(nameIterators());
console.log([...nameIterators()]);
// ________________________________________________________
for (const iiii of nameIterators()) {
    console.log(iiii);
}

