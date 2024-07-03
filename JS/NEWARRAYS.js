
let list1 = [1,2,3,4,5,6,7]
// * ARRAY OF ______________________________
let list2 = Array.of(2)
console.log(list2);
// * ARRAY FROM ___________________________
let list3 = Array.from(list1,item => item*5)
console.log(list3);
// * ARRAY.FILTER  __________________________
let list4 = list1.filter(item=>item % 2 ==0)
console.log(list4);
// * ARRAY.FIND _________________________
let list5 = list1.find(item => item %2 ==0)
console.log(list5);
// * ENTRIES _____________________________
let list6 = list1.entries()
console.log(list6);
// * FILL _______________________________
let list7 = list1.fill("a",3,6)
console.log(list7);
// * COPYWITHIN _________________________
let list8 = list1.copyWithin(1,5)
console.log(list8);
// * FOR OF _____________________________
let list9 = [`pourya`,`ali`,`reza`,`mohammad`]
for (const ii of list9) {
    console.log(ii);
}


let list10 = {
    name: `pourya`,
    name2 : `ali`,
    name3 : `reza`,
    name4 : `mahdi`
}

for (const iii in list10) {
    if (Object.hasOwnProperty.call(list10, iii)) {
        const element = list10[iii];
        console.log(element);
    }
}