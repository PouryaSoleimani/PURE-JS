// ^ PROMISES -------------------------------------------------------------------------------------------------------------------

// const { default: axios, AxiosError } = require("axios");

// ! FIRST PROMISE ----------------------------------------------
// const myFirstPromise = new Promise((resolve, reject) => {
//   const error = false;
//   error === false ? resolve() : reject();
// });
// ! SECOND PROMISE -------------------------------------------
// const mySecondPromise = new Promise((resolve, reject) => {
//   const err = false;
//   err === false
//     ? setTimeout(() => {
//       resolve(`SECOND PROMISE RESOLVED !`);
//     }, 2000)
//     : reject(console.error(`SECOND PROMISE HAS AN ERROR`));
// });
//  * RUN FIRST PROMISE ---------------------
// myFirstPromise
//   .then((result) => { console.log(`FIRST PROMISE RESOVLVED !`) ; }
//   .catch((err) => {  console.error(`FIRST PROMISE REJECTED !`); } );
//  * RUN SECOND PROMISE -------------------
// mySecondPromise.then((result) => {  console.log(result); } )
//   .catch((err) => {  console.error(`ERROR!`); } );

// ^ FETCH API -------------------------------------------------------------------------------------------------------------------
// ! BASE URL --------------------------------------------------------------------------------------------------------------------
// const users = fetch("https://reqres.in/api/users?page=1")
// PENDING -------------------------------
// console.log(users);
// * GETTING ------------------------------
// users .then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// });
//  * CONVERTING TO JSON -------------------
// users.then((result) => {
//   return result.json()
// }).then((data) => {
//   console.log(data);
// })
//   .then()
// .catch(err => {
//   console.error(err);
// })
// *  SHOWING EACH USER -----------------
// users.then((response) => {
//   return response.json()
// }).then((data) => {
//   console.log(data)
//   data.data.forEach(user => {
//     // console.log(user);
//     console.log(` ${user.id} / ${user.first_name} ${user.last_name} ---- ${user.email}`);
//   })
// }).catch((err) => {
//   console.error(err);
// });

// ^ ASYNC / AWAIT ----------------------------------------------------------------------------------------------
// const myCoolFunction = async () => {
//   const response = await fetch("https://reqres.in/api/users?page=1")
//   const jsonUserData = await response.json()
//   const showEachUser = await jsonUserData.data.map(user => {
//     console.log(`${user.id} / ${user.first_name} ${user.last_name} ====> ${user.email}`);
//   })
//   console.log(jsonUserData);
// }
// myCoolFunction()

// ! DADJOKE EXAMPLE (GET DATA WITH FETCH API) -------------------------------------------------------
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", { method: "GET", headers: { Accept: "application/json" } })
//   // console.log(response);
//   const theJoke = await response.json()
//   console.log(`${theJoke.joke}`);
// }
// getDadJoke()

// ! POST DATA WITH FETCH API ------------------------------------------------------------------------
// const jokeObject = {
//   id: '2512523421',
//   joke: "Why was it called the dark ages? Because of all Knights !"
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
// ! REQEUST DATA WITH FETCH API ------------------------------------------------------------------------
// const requestJoke = async (firstName , lastName) => {

//   const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);
//   const jsonResponse = await response.json()
//   console.log(jsonResponse.headers);
// }
// requestJoke("BRUCE","LEE")

// const requestUser = async ()=>{
//   const response = await fetch (`https://reqres.in/api/users/2`)
//   const jsonResponse = await response.json()
//   console.log(jsonResponse);
// }
// requestUser()

//  ----------------------------------------------------------------------------------------------------------
// window.history.back()
// window.history.forward()
// window.history.go()
// localStorage.setItem()
// localStorage.getItem()
// sessionStorage.getItem()
// sessionStorage.setItem()
// ------------------------------------------------------------------------------------------------------------
// fetch ( `https://reqres.in/api/users?page=2`)
// .then((result) => {
//  console.log(result);
// }).catch((err) => {
