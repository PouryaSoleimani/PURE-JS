//  1 -----------------------------------------------------------------------------------------------------------------------------
let newArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArray);
newArray.pop(7);
newArray.unshift(8);
console.log(newArray);
//  2 ------------------------------------------------------------------------------------------------------------------------------
// let newArray = [1,2,3,4,5,6,7,8]
newArray.splice(4, 0, 3.5);
console.log(newArray);
//  3 ------------------------------------------------------------------------------------------------------------------------------
let newArray2 = [10, 11];
let newArray3 = newArray.concat(newArray2);
console.log(newArray3);
//  4 ------------------------------------------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let separateSize = 2;
let seperatedArr = [];
for (let i = 0; i < numbers.length; i += separateSize) {
  seperatedArr.push(numbers.slice(i, i + separateSize));
}
console.log(seperatedArr);
//  5 -----------------------------------------------------------------------------------------------------------------------------
let newArray4 = [100, 700, 300, 400, 600, 500];
console.log(newArray4);
newArray4.sort();
console.log(newArray4);
// ---------------------------
let length = newArray4.length;
console.log(length);
// ---------------------------
console.log(newArray4[5]);
//  6 ----------------------------------------------------------------------------------------------------------------------------
let newArray5 = [1, 2, 3, 4, 5, 6, 7, 8];
let newArray6 = Array.from(newArray5, (item) => item * item);
console.log(newArray6);
//  7 ----------------------------------------------------------------------------------------------------------------------------
let newArray7 = [1, [2, 3], [4, 5], [6, 7], 8, 9, 10];
let flattedArray = newArray7.flat();
console.log(flattedArray);
//  8 ----------------------------------------------------------------------------------------------------------------------------
let newStr = "Hello , Good Morning  , Hope you all having a good time out there ,,,,,";
let newStr2 = newStr.replaceAll(",", "*");
console.log(newStr2);
//  9 ----------------------------------------------------------------------------------------------------------------------------
console.log(Object.getOwnPropertyNames(window));
//  10 ---------------------------------------------------------------------------------------------------------------------------
let names = "pourya , ali , mohammad , reza , mehdi";
let last = names.lastIndexOf(`mehdi`);
console.log(last);
//  11 ---------------------------------------------------------------------------------------------------------------------------
let myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray);
let myArray2 = myArray.reverse();
console.log(myArray2);
//  12 --------------------------------------------------------------------------------------------------------------------------
displayerFunc = (result) => {
  console.log(result);
};
calcFunc = (num1, num2, displayerFunc) => {
  let sum = num1 * num2;
  displayerFunc("The Result is " + sum + " ");
};
calcFunc(4, 6, displayerFunc);
//  13 --------------------------------------------------------------------------------------------------------------------------
//  14 --------------------------------------------------------------------------------------------------------------------------
let mySelf1 = { name: "pourya", family: "soleimani" };
let mySelf2 = { age: "30", gender: "male" };
let mySelfFull = { ...mySelf1, ...mySelf2 };
console.log(mySelfFull);
//  15 ___________________________________________________________________________________________________________________________
randomNumberFunc = (max, min) => {
  let randomNumber = Math.floor(Math.random(max - min) * 100);
  console.log(randomNumber);
};
randomNumberFunc(100, 0);
//  16 ___________________________________________________________________________________________________________________________
phonenumber = (inputtxt) => {
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  inputtxt.match(phoneno)
    ? console.log(`Phone Number is Valid`)
    : console.log(`ERROR`);
};
phonenumber("9356462050");
//  17 ___________________________________________________________________________________________________________________________
emailAddressFunc = (userEmail) => {
  let validatedEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  userEmail.match(validatedEmail)
    ? console.log(`E-MAIL is Vaild`)
    : console.log(`E-MAIl is Invalid`);
};
emailAddressFunc("pouryasolei125353");

//^  18 ___________________________________________________________________________________________________________________________
let d = new Date();
let hour = d.getHours();
let minute = d.getMinutes();
let seconds = d.getSeconds();
let ms = d.getMilliseconds();
console.log(`${hour} : ${minute} : ${seconds} : ${ms}`);

//^  19 ___________________________________________________________________________________________________________________________
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = array1.concat(array2);
console.log(array3);

//^  20 ___________________________________________________________________________________________________________________________
let d1 = new Date();
let fullDate = `${d1.getFullYear()} / ${d1.getMonth() + 1} / ${d.getDate()}`;
console.log(fullDate);
//  21 ___________________________________________________________________________________________________________________________
function sum(...args) {
  let a = args.reduce((x, y) => {
    return x + y;
  });
  console.log(a);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);

//  22 ___________________________________________________________________________________________________________________________
let myArray5 = [2, 4, 6, 8, 10];
for (let x of myArray5) {
  x += x;
  console.log(x);
}
//  23 ___________________________________________________________________________________________________________________________
let date = new Date();
console.log(date);
let date2 = date.toLocaleString("fa-IRST");
console.log(date2);

//  24 ___________________________________________________________________________________________________________________________
let date4 = Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
}).format();
console.log(date4);

//  25 __________________________________________________________________________________________________________________________
const testNumbers = [1, 3, 2, 4, 6, 7, 5];
console.log(testNumbers);
testNumbers.sort();
console.log(testNumbers);
// testNumbers.sort(function increasementFunc(a,b) {return a-b})

//  26 _________________________________________________________________________________________________________________________
let rev = testNumbers.reverse();
console.log(rev);
// testNumbers.sort(function decreasementFunc(a,b){return b-a})

//  27 _________________________________________________________________________________________________________________________
let alphaArray = [
  "b",
  "d",
  "c",
  "v",
  "f",
  "g",
  "h",
  "j",
  "q",
  "w",
  "y",
  "a",
  "u",
  "i",
  "o",
  "e",
];
let alphaArray2 = alphaArray.sort();
console.log(alphaArray2);

//  28 _________________________________________________________________________________________________________________________
let trueArray = [1, 2, 3, 4, 5, 6, true, "Hello", "test text"];
trueArray.includes(true) ? console.log(`TRUE`) : console.log(`FALSE`);
// if (trueArray.hasOwnproperty===true) {console.log(`ok`);
// } else {console.log(`error`);}

//  29 __________________________________________________________________________________________________________________________
//*  USING JSON _____________________________________________________________________________________________________________________________
let dubArray = [2, 4, 6, 8, 10, 12, 14, 16];
let dubArray2 = JSON.stringify(dubArray);
console.log(dubArray2);
let dubArray3 = JSON.parse(dubArray2);
console.log(dubArray);
console.log(dubArray3);

//  USING SPREAD [...] ___________________________________________________________________________________________________________________
let dubArray4 = [...dubArray];
console.log(dubArray4);

//  USING OBJECT.ASSIGN ___________________________________________________________________________________________________________________
let dubArray5 = Object.assign(dubArray);
console.log(dubArray5);

//  30 ____________________________________________________________________________________________________________________________________
let addArray = [3, 5, 7, 9, 11];
let addArray2 = addArray.toString().replaceAll(",", "");
console.log(addArray2);
let addArray3 = addArray2.concat("13");
console.log(addArray3);
let addArray4 = Array.from(addArray3);
console.log(addArray4);

//  31 ____________________________________________________________________________________________________________________________________
let removeArray = ["a", "b", "c", "d", "e", "f"];
console.log(removeArray);
// ________________________________________________________________________________________________
let removeItem = removeArray.splice(0, 1);
console.log(removeItem);
console.log(removeArray);
//  32 ___________________________________________________________________________________________________________________________________
let flatArray = [1, 2, [3, 4], [5, 6]];
console.log(flatArray);
let flatArray2 = flatArray.flat();
console.log(flatArray2);
//  33 ______________________________________________________________________________________________________________________________________
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
let list3 = new Set(arr)
console.log(list3);
//  34 --------------------------------------------------------------------------------------------------------------------------------------
document.cookie = Math.floor(Math.random() * 1000);
let ck = document.cookie;
console.log(ck);
//  35 --------------------------------------------------------------------------------------------------------------------------------------
document.cookie =
  "username=pouryasoleimani ; expires = Thu,01 Jan 1970 00:00:00 UTC;";
//  36 --------------------------------------------------------------------------------------------------------------------------------------
// setInterval(() => {
//   console.log(`HELLO :)`);
// }, 2000);
//  37 -------------------------------------------------------------------------------------------------------------------------------------
// setTimeout(() => {
//   setInterval(() => {
//     console.log(`HI GUYS `);
//   }, 1000);
// }, 5000);
//  38 -------------------------------------------------------------------------------------------------------------------------------------
//  39 -------------------------------------------------------------------------------------------------------------------------------------
function display(x) {
  return Promise.resolve(x)
}
display(100).then(data => {
  setTimeout(() => {
    console.log(data);
  }, 3000);
})
//  40 -------------------------------------------------------------------------------------------------------------------------------------
function sum(num1, num2) {
  let a = num1 + num2
  return Promise.resolve(a)
}
sum(20, 30).then(data => {
  setTimeout(() => {
    console.log(data);
  }, 3000);
})
//  41 -------------------------------------------------------------------------------------------------------------------------------------
Promise.all([sum]).then(data => {
  console.log(`THIS PROMISE HAS BEEN RESOLVED WITH PROMISE.ALL`);
})
//  42 -------------------------------------------------------------------------------------------------------------------------------------
function displayer(res) {
  setTimeout(() => {
    console.log(res);
  }, 3000);
}
function showNumber(num1, callBack) {
  callBack(num1)
}
showNumber(500, displayer)
// THE ANSWER IS 500
//  43 -------------------------------------------------------------------------------------------------------------------------------------
function displayer2(res2) {
  setTimeout(() => {
    console.log(res2);
  }, 3000);
}
function callBackFunc(num1, num2, callback) {
  let sum = num1 + num2
  callback(sum)
}
callBackFunc(100, 200, displayer2)
import { retry } from "@reduxjs/toolkit/query";
// THE ANSWER IS 300
//  44 --------------------------------------------------------------------------------------------------------------------------------------
import axios from "axios";

const myList = document.querySelector(`#usersList`)

async function getData() {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=1")
    // console.log(response);
    // console.log(response.data.data);
    for (const i in response.data.data) {
      if (Object.hasOwnProperty.call(response.data.data, i)) {
        //  USER NAMES
        const el = response.data.data[i];
        let content = `${el.first_name} ${el.last_name}`
        let userItem = document.createElement(`li`)
        myList.appendChild(userItem)
        userItem.textContent = content
        userItem.classList.add(`flex`, `flex-row-reverse`, `items-center`, `justify-end`, `gap-4`, `my-auto`, `hover:bg-slate-600`
          , `w-full`, `rounded-xl`, `duration-150`)
        //  USER IMAGES __________
        let imageSrc = `${el.avatar}`
        let userImage = document.createElement(`img`)
        userItem.appendChild(userImage)
        userImage.setAttribute(`src`, imageSrc)
        userImage.classList.add(`w-12`, `h-12`, `rounded-full`)
      }
    }

  } catch (error) { console.error('ERROR^'); }
}
getData()
//  45 --------------------------------------------------------------------------------------------------------------------------------------
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", { method: "GET", headers: { Accept: "application/json" } })
//   // console.log(response);
//   const theJoke = await response.json()
//   console.log(`${theJoke.joke}`);
// }
// getDadJoke()

// ---------------------------------------------------------------------------------------------------------------------
// const jokeObject = {
//   id: '2512523421',
//   joke: "Why was it called the dark ages? Because of all Knights "
// }

// const postJoke = async (jokeObject) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(jokeObject)
//   })
//   console.log(response);
//   const jsonResponse = await response.json()
//   console.log(jsonResponse.headers);
// }
// postJoke()

// ------------------------------------------------------------------------------------------------
