// ! CALLBACK HELL 😈 ________________________________________________________
// doSomeThing= ()=>{
//     setTimeout(() => {
//         console.log(`run2`);
//     }, 1000);
// }

// console.log(`run1`);
// doSomeThing()
// console.log(`run3`);

// ! USING CALLBACKS -----------------------------------------------------------
// doSomeThing = (callback) => {
//   setTimeout(() => {
//     callback(`run2`);
//   }, 1000);
// };
// console.log(`run1`);
// doSomeThing(function (data) {
//   console.log(data);
// });
// console.log(`run3`);
// ____________________________________________________________________
display = (res) => {
  console.log(res);
};

calc = (num1, num2) => {
  let a = num1 + num2;
  display(a);
};
calc(10, 20);
// ----------------------------------------------------------------------------
function Displayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(52, 52, Displayer);




let cookie =document.cookie = 'username=pouryasoleimani'
console.log(cookie);

let x = document.cookie
console.log(x);

// & SHORT IF AND ELSE ---------------------------------------------------------
12 === 12 ? console.log(`true`) : console.log(`false`);