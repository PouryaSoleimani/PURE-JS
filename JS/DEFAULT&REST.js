// function rest(a = 10 , b = 20 , ...rest) {
//     console.log(a,b ,...rest);
// }
// rest( 3,4,5,6,7,8)

function sum(...args) {
let a = args.reduce((x,y)=>{
    return x+y
})
console.log(a);
}
sum(1,2,3,4,5,6,7,8,9,10,11)
