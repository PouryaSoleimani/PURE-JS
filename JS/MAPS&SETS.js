// ! MAPS --------------------------------------------------------------------
let mysymbol = Symbol(`myData`)
let myObj = {}
let myFunc = () => { }

let list = new Map()
console.log(list);

// SETIING DATA __________________________________________________
list.set(`key1`, `hesam`)
list.set(`mysymbol`, `22`)
list.set(`myObj`, `ali`)
list.set(`myFunc`, 500)
console.log(list);

// GETTING DATA __________________________________________________
console.log(list.get(`key1`));

let listA = list.get(`myObj`)
console.log(listA);

console.log(list.entries);

// ITERATING A MAP WITH TWO ELEMENTS ---------------------------------
list.forEach((key, value) => {
  console.log(key, value);
})

// OTHER METHODS -----------------------------------------------------
console.log(list.has(`myObj1`));
console.log(list.keys());
console.log(list.values());

// USING FOROF AND DESTRUCTION ----------------------------------------

for (const [key, value] of list) {
  console.log(key, value);
}

// ! SETS --------------------------------------------------------------------------------------
//  A SET IS JUST LIKE A MAP , BUT IT WONT GET REPEATED KEYS AND VALUES ------------------------
let list2 = new Set()
console.log(list2);

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
let list3 = new Set(arr)
console.log(list3);
// ! WEAKMAPS & WEAKSETS ------------------------------------------------------------------------
