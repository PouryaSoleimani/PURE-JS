function defaultValue(a=10,b=20) {
    console.log(a,b);
}
defaultValue()
// output --> 10 20

// * REST __________________________
let c=[a,b,...x]=[10,20,30,40,50,60]
console.log(c);
console.log(...x);
// * IF SHORTHAND _____________________________________________________________
// let a = typeof x === 'undefined' ? 1 : x ;
// * __________________________________________________
function arg(...args) {
    console.log(args);
}
arg(1,2,3)
// *  REDUCE _________________________________________
function sum(...rest) {
    // console.log(rest);
    return rest.reduce(( pre , current)=>{
    return pre + current;
    })
}
console.log(sum(1,2,3,4,5,6,7));

// ** REDUCE() _____________________________
let arr = [10,20,30,40,50,60,70,80]
let arrReduce = arr.reduce((pre , current)=>{
    return pre+current
})
console.log(arrReduce);