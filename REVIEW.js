//^ SPREAD SYNTAX
let me1 = { name: "pourya", age: 30 }
let me2 = { job: "developer" }
let fullMe = { ...me1, ...me2 }
console.log(fullMe)

//^ DATE
let d1 = new Date();
let fullDate = `${d1.getFullYear()} / ${d1.getMonth() + 1} / ${d1.getDate()}`;
console.log(fullDate);

//^ REDUCE
function sum(...args) {
  let a = args.reduce((a, b) => { return a + b })
  console.log(a)
}
sum(1, 2, 3, 4, 5)

//^ SORT 
const numArray = [10, 60, 70, 20, 50, 40, 30]
let sortedNumArray = numArray.sort()
let reversedSortedArray = sortedNumArray.reverse()

const monthsArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jul']
let toSortedMonthArray = monthsArray.toSorted()
let reversedMonthsArray = monthsArray.toReversed()

const pointsArray = [19, 18, 15, 17, 20, 14]
let descendingSortedPoints = pointsArray.sort().reverse()
console.log(descendingSortedPoints)
