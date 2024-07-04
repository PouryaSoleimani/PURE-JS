let me1 = { name: "pourya", age: 30 }
let me2 = { job: "developer" }
let fullMe = { ...me1, ...me2 }
console.log(fullMe)


let d1 = new Date();
let fullDate = `${d1.getFullYear()} / ${d1.getMonth() + 1} / ${d1.getDate()}`;
console.log(fullDate);


function sum(...args) {
  let a = args.reduce((a, b) => { return a + b })
  console.log(a)
}
sum(1, 2, 3, 4, 5)


