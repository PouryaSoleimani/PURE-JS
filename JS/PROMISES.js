// import { axios } from "../node_modules/axios"
// ! ASYNCHRONOUS -------------------------------------------------------------------------------
// * CALLBACKS ----------------------------------------------------------------------------------
// function display(result) {
//   console.log(`the result is ` + result);
// }
// function calc(num1, num2, callBack) {
//   let sum = num1 * num2;
//   callBack(sum);
// }
// calc(2, 4, display);
// * SET TIMEOUT() ------------------------------------------------------------------------------
// myFunc=()=>{ console.log(`HELLO ❤❤💖`); }
// setTimeout( myFunc,2000 );
// ----------------------------------------------------------------------------------------------
// setTimeout(() => { console.log(`HELLO 💖💖💖`); } , 2000 );
// * SET INTERVAL() -----------------------------------------------------------------------------
// a=setInterval(() => {
//     console.log(`HELLO 💖💖💖 `);
// }, 1000);
// clearInterval(a)
// ! PROMISES -----------------------------------------------------------------------------------
// * SIMPLE EXAMPLE -----------------------------------------------------------------------------
let myFirstPromise = new Promise((resolve, reject) => {
    resolve(`OK`)
    reject(`ERROR`)
})
myFirstPromise .then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// * RESOLVE AND REJECT IN GENERALL -------------------------------------------------------------------------------
function getData() {
 let name = `PORI`    
 return Promise.resolve(name)
}
getData().then((data)=>{console.log(data)}).catch((err)=>{console.log(`ERROR`);})
// ~ ---------------------------------------------------------------------------------------------------------------
function summ(num1,num2) {
    let a = num1 + num2
    return Promise.resolve(a)
}
summ(40,20).then((data)=>{console.log(data);})

// * PROMISE.ALL & PROMISE.RACE ------------------------------------------------------------------------------------