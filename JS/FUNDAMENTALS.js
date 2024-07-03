// ** DATA TYPES
let a = 12;
console.log(a);

var b = 13;
console.log(b);

var num = 14;
console.log(num);

var boolean = true;
console.log(boolean);
// UNDEFINED
var none;
console.log(none);
// NULL
var Null = null;
console.log(null);
// NaN
var nan = NaN;
console.log(nan);
// typeof
var num2 = 5;
console.log(typeof num2);

//  ** ARRAYS
var ary = ["bmw", "M3", "Black"];
console.log(ary);
console.log(typeof ary);
console.log(ary[0]);

// ** OBJECTS
var obj = {
  make: "BMW",
  model: "M3",
  color: "black",
};
console.log(obj);

// ** OPERATORS
// ^^  + = * /
// ^^ ++ OPERATOR
// ^^ OPERATORS WITH DIFFERENT DATA TYPES

// ** LOGICAL OPERATORS
let g = 5;
let h = 6;
console.log(g == h);
// == === < > <= >=
//  == !=
// null == undefined --> true
// null == NaN --> false
// 0 == null --> false

// ** PARANTHESES
// a * b + c !== a * (b+c)

// ** FUNCTIONS
function testlog() {
  console.log(10 + 10);
}
testlog();

function hello() {
  console.log("HELLO");
}
hello();

function test(a, b) {
  console.log(a, b);
}
test();
function sum(a ,b){
 return a + b;
}
var c  = sum( 4 , 5);
console.log(c);
// ********
function sayHello(){
  return 'HELLO ROOCKET'
}

console.log(sayHello());

var hl  = sayHello()
console.log(hl);

// GOOD BYE
function sayGoodbye(){
  return "GOOD BYE"
}
console.log(sayGoodbye());

var gB = sayGoodbye()
console.log(gB);