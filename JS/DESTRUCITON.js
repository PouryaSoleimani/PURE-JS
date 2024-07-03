//  * ARRAY DESTRUCTION _____________________________________________________________

// ? OLD WAY ________________________________________________________________________
let desArray = [1, 'pourya' , false , 2 ,'hello rocket']
let arr1 = desArray[0]
let arr2 = desArray[1]
console.log(arr1, arr2);

//  ^ DESTRUCTION ___________________________________________________________________
// let desArray = [1, 'pourya' , false , 2 ,'hello rocket']
let [ , ,item3, ,item4] = desArray
console.log(item3,item4);

// ! IGNORING _______________________________________________________________________
// let desArray = [1, 'pourya' , false , 2 ,'hello rocket']
let [x, ,y, ,z] = desArray     
console.log(x,y,z);

// & REST OPERATOR ___________________________________________________________________
let restArray = [1,2,3,4,5,6,7,8,9,10,11,12]
let [i,j,...c] = restArray
console.log(i,j);
console.log(...c);


//  * OBJECT DESTRUCTURING ____________________________________________________________
let desObject = {
    name : 'Pourya',
    family : 'Soleimani',
    // age : 30,
    gender : "Male",
    log : ()=>{return "HELLO !";}
}

let name1 = desObject.name;
console.log(name1);

 let { name ,family: lastname , age=30 , log: bar} =desObject
 console.log(name ,lastname,age, bar());

//  ! TRAINING ---------------------------------------------------
// let desArray = [10,20,30,40,50,60,70,80,90,100],
// [a,,,,b,c,...rest] = desArray
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(...rest);