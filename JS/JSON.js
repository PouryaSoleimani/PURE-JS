"use strict"
// ^ A SIMPLE OBJECT
let myObj = {
  name: "pourya",
  family: `Soleimani`,
  age: `30`,
  gender: `Male`
}
console.log(myObj);
// ^ CONVERTING TO A STRING
let myObjStr = JSON.stringify(myObj)
console.log(myObjStr);

// ^ CONVERTING TO AN OBJECT
let myObjObj = JSON.parse(myObjStr)
console.log(myObjObj);

// ^ STORE AND ITEM IN SESSION STORAGE
sessionStorage.setItem("MYSTOREDDATA", myObjStr)

// ^ STORE AND ITEM IN LOCAL STORAGE
localStorage.setItem(`MYDATA`, myObjStr)


