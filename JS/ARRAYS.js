var arr = ["Benz", "BMW", "Porsche", "Audi"];

// function arrayTest(myArray) {
//   var i = 0;
//   while (i < myArray.length) {
//     console.log(myArray[i]);
//     i * 2;
//   }
// }
// arrayTest(arr);
// ^^ forEach ---------------------------------------------------------------------------------------------------------
// var arr2 = [1, 2, 3, 4, 5, 6];
// arr2.forEach(function (item) {
//   console.log(item);
//   let newA = "This is " + item;
//   console.log(newA);
// });

// var arr3 = ["color", "car", "cat", "conosle", "cream"];
// arr3.forEach(function (item) {
//   var b = item.replace(/c/g, "b");
//   console.log(b);
// });
// //////////////////////////////////////////////////

// var arr4 = [1, 3, 5, 7, 'BMW'];
// arr4.forEach(function(item){
//     var newArr = item + 1
//     console.log(newArr);
// })
// var search = arr4.indexOf('BMW')
// console.log(search);

let myArray = [1, 2, 3]
let myArray2 = myArray.forEach(function (item) {
  return item * 2
})
console.log(myArray2);
// ^^ INDEX OF() --------------------------------------------------------------------------------------------------
var search = testList.indexOf(6);
console.log(search);

let testList2 = [1, 3, 5, 7, 9, 11];
console.log(testList2);
// ^ PUSH
testList2.push(13)
console.log(testList2);

// ^ POP
testList2.pop(13)
console.log(testList2);

// ^SHIFT
testList2.shift(1)
console.log(testList2);

// ^UNSHIFT
testList2.unshift(1)
console.log(testList2);

// ^ INDEXOF
let oF = testList2.indexOf(11)
console.log(oF);

// ^ SPLICE -------------------------------------------------------------------------------------------------
var spliceText = testList2.splice(1, 3)
console.log(spliceText);
console.log(testList2);

// ^ SLICE --------------------------------------------------------------------------------------------------
var sliceTest = testList2.slice(1, 2)
console.log(sliceTest);
console.log(testList2);

// ^ JOIN ----------------------------------------------------------------------------------------------------
let joinTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let joined = joinTest.join("")
console.log(joinTest);
console.log(joined);


// ^^ CONCAT -------------------------------------------------------------------------------------------------
let listFirst = [1, 2, 3]
let listSecond = [4, 5, 6]

let concatList = listFirst.concat(listSecond)
console.log(listFirst);
console.log(listSecond);
console.log(concatList);

// ^^ REVERSE -----------------------------------------------------------------------------------------------
let concatReverse = concatList.reverse()
console.log(concatReverse);
let concatList2 = concatReverse.reverse()

// ^ FILTER ------------------------------------------------------------------------------------------------
let filterList = concatList2.filter(function (item) {
  return item % 2 != 0
})
console.log(filterList);

// ^^ MAP ---------------------------------------------------------------------------------------------------
let mapList = concatList2.map(function (item) {
  return item * 3
})
console.log(mapList);
//  ------------------------------------------------TRAINING------------------------------------------------
let mapList3 = [1, 2, 3, 4, 5, 6, 7]
let mapList4 = mapList3.map(function (items) {
  return items * 2
})
console.log(mapList4);
// ^^ TOSTRING() ---------------------------------------------------------------------------------------------
const toStringArr = [1, 2, true, 3]
console.log(toStringArr);
let str = toStringArr.toString()
console.log(str);

// ^^ SORT() -------------------------------------------------------------------------------------------------
toStringArr.sort()
console.log(toStringArr);

// ^^ lENGTH() -----------------------------------------------------------------------------------------------------
let lng = toStringArr.length
console.log(lng);

// ^^ ForEach() -----------------------------------------------------------------------------------------------------
var newTostr = toStringArr.forEach(function (item) {
  var item = "item is  " + item
  console.log(item);
})


// **-------------------------------------------------------------------------------------------------------------------
// ** EXAM -------------------------------------------------------------------------------------------------------------
// ^^ FOREACH ---------------------------------------------
const examList = ["Benz", "BMW", "Porsche", "Audi"]
let examList2 = examList.forEach(function (item) {
  item = " " + " - " + item
  console.log(item);
})

// ^^JOIN -------------------------------------------------
let jn = [1, 22, 55, 66, 77, 88]
let njn = jn.join("")
console.log(njn);

// ^^CONCAT -----------------------------------------------
const listaval = [1, 2, 3]
const list2vom = [4, 5, 6]
const concated = listaval.concat(list2vom)
console.log(concated);

// ^^ REVERSE ---------------------------------------------
let rvs1 = [8, 9, 10]
let rvs2 = rvs1.reverse()
console.log(rvs2);

// ^^ FILTERLIST ------------------------------------------
let fltr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let fltr2 = fltr1.filter(function (item) {
  return item % 2 == 0
})
console.log(fltr2);

// ^^ MAP -------------------------------------------------
const mapping = [1, 3, 5, 7, 9, 11, 13, 15]
const mapping2 = mapping.map(function (item) {
  return item + 1
})
console.log(mapping2);
var y = 2
function test(params) {
  let x = 2;
}
const z = {
  make: 'ford',
  model: 'mustang'
}
//  & NEW METHODS IN ES6 _______________________________________________________________________________________
let list = Array(2)
console.log(list);

