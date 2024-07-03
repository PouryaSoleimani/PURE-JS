function sum(a,b,c) {
    console.log(a + b+c );
}

let list =[10,20,30]
sum(...list)

let list2 = [40,50,60]
console.log([...list , "pourya" , ...list2]);


// REDUCE _________________________________________
let list3 = [...list , ...list2]
console.log(list3);
let list3Red = list3.reduce((x,y)=>{
    return x + y
})

console.log(list3Red);  

// *  FOROF _____________________________________________

listfor = [10 ,20 ,30 ,40 ,50]
for (let item of listfor) {
    console.log(item + "---");
}

stringforof = "POURYA"
for (const item of stringforof) {
    console.log(item);
}

listforof2 = [1,2,3,4,5,6,7]
for (const item of listforof2) {
    console.log(item);
}

// ***************************************************

