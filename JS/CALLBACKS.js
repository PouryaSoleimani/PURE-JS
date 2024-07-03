// ^ FIRST AND OLD METHOD ___________________________________________________
// ! DISPLAYER FUNCTION _____________________________________________________
displayResult = (result) => {
  console.log("the result is " + result + "(OLD METHOD)");
};
// CALCULATOR FUNCTION ______________________________________________________
calculatorFunc = (num1, num2) => {
  let calcResult = num1 * num2;
  displayResult(calcResult);
};
// INVOKING THE FUNCTION ____________________________________________________
calculatorFunc(3, 5);

// ^ CALLBACK FUNCTION METHOD _________________________________________________
displayer = (input)=>{
    console.log(input);
}
calculatorFunc = (num1 , num2 , myCallback)=>{
    let calcResult = num1 * num2
    myCallback("The Result is " + calcResult + " CALLBACK METHOD")
}
calculatorFunc(5,6,displayer)

// * TRAINING _______________________________________________________________
show = (result)=>{
  console.log(result);
}

calc = (num1,num2,show)=>{
  let a = num1 +num2  
  show(a)
}
calc(2,4,show)
// __________________________________________________________

display= (res) =>{
  console.log(res);
}
calc = (num1,num2,display)=>{
 let res2 = num1 + num2
 display(res2)
}
calc(10,50,display)

