// && #1 ---------------------------------------------------------------------------------------------------

let sampleText = "acc  color  car  cave  collar  cat ";
let sampleText2 = sampleText.replace(/c/g, "b");
console.log(sampleText);
console.log(sampleText2);

// ** ARRAY -----------------------------------------------------

var arr3 = ["color ", "cat", "cat ", "cave"];

arr3.forEach(function (item) {
  let b = item.replace(/c/g, "b");
  console.log(b);
});

// && #2 --------------------------------------------------------------------------------------------------
// ** ARRAY-----------------------------------------------------

var arr5 = [
  " ",
  "          Hello         ",
  "           World",
  "        hello           ",
];
arr5.forEach(function (item) {
  var removeSpace = item.replaceAll(" ", "");
  console.log(removeSpace);
});

// ** STIRNG --------------------------------------------------

var arr6 = "   Hello      my    Name    is    Pourya     ";
var reMove = arr6.replaceAll(" ", "");
console.log(arr6);
console.log(reMove);

// && #3 ---------------------------------------------------------------------------------------------------

var testList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(testList);
delete testList[5];
console.log(testList);

// && #4 ----------------------------------------------------------------------------------------------------
var myText = "                                           Hello This is a Sample Text!"
var myNewText = myText.trimStart()
console.log(myText);
console.log(myNewText);

// && #5 ---------------------------------------------------------------------------------------------------
// ** WITH SPLICE --------------------------------------------
// var carsList = ["benz" , "bmw" , "posrche" , "audi" , "ford" , "chevrolet" , "volkswagen"]
// console.log(carsList);
// var newCarsList = carsList.splice(3,8);
// console.log(carsList);

// ** WITH DELETE --------------------------------------------
var carsList = ["benz", "bmw", "posrche", "audi", "ford", "chevrolet", "volkswagen"]
console.log(carsList);
delete carsList[3]
console.log(carsList);

// && #6 IP ADDRESS REPLACE -------------------------------------------------------------------------------------
let ipText = "This is my Ip-Address `12.52.12.12` , How can i change it???"
let ipText2 = ipText.match(/[0-9.0-9.0-9.0-9]/g)
let ipText3 = ipText.replaceAll(/[`0-9.0-9.0-9.0-9`]/g, "pourya")
console.log(ipText);
console.log(ipText3);
