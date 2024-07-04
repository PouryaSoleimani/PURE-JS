// **** STRING METHODS
//^ 0 - LENGTH -----------------------------------------------------------------------------------
// RETURNS THE LENGTH OF A STRING

//^ 1 - SLICE() ---------------------------------------------------------------------------------
let list = "Banana , Kiwi , Apple";
let extractedPart = list.slice(0, 8);
console.log(extractedPart);
// Extracted Part --> Banana;

let cars = "benz , bmw , audi";
let sliceCars = cars.slice(0, 10);
console.log(sliceCars);
// Extracted Part --> benz , bmw;

let extractedPart2 = list.slice(8);
console.log(extractedPart2);
// Extracted Part --> from index number 8 till the end;

let extractedPart3 = list.slice(-10);
console.log(extractedPart3);
// Extracted Part --> from the end till the index number 10;

//2 - SubString() ----------------------------------------------------------------------------------
// * ? same as slice , the only difference is substring doesnt accept negative values.

//3- SubStr() --------------------------------------------------------------------------------------
// * same as slice , the only difference is substr second parameter is the length of the slice
// * if we dont give the second paramter , substr will cut the first parameter till the end

//4 - Replace() -----------------------------------------------------------------------------------
let first = "please vist Microsoft Website";
let after = first.replace("Microsoft", "W3Schools");
console.log(first);
console.log(after);

//5 - ReplaceAll() --------------------------------------------------------------------------------
let rpl1 =
  " i love dogs , dogs are so lovely , once i had two dogs called jessie and jackie";
let rpl2 = rpl1.replaceAll("dogs", "cats");
console.log(rpl1);
console.log(rpl2);

// 6 - toUpperCase() & toLowerCase() -----------------------------------------------------------------

let defaults = "Hello world !";
let uppers = defaults.toUpperCase();
let lowers = defaults.toLowerCase();
console.log(defaults);
console.log(uppers);
console.log(lowers);

// 7 - conCat() --------------------------------------------------------------------------------------
let con1 = "Learn";
let con2 = " Javascript";
let conSum = con1.concat(con2);
console.log(conSum);

//8 - TRIM ------------------------------------------------------------------------------------------
let untrimText =
  "                                      this text is Untrimmed                              ";
let trimText = untrimText.trim();
console.log(untrimText);
console.log(trimText);

//9 - TRIMSTART ------------------------------------------------------------------------------------------
// ** SAME AS TRIM BUT IT REMOVES ONLY THE SPACES IN THE BEGINNING FOR THE STRING

//10- TRIMEND ------------------------------------------------------------------------------------------
// ** SAME AS TRIM BUT IT REMOVES ONLY THE SPACES IN THE END FOR THE STRING

//11- PADSTART ------------------------------------------------------------------------------------------
let paddtext = "this is a padtest";
let paddtext2 = paddtext.padStart(30, "000");
console.log(paddtext);
console.log(paddtext2);

//12- PADEND ------------------------------------------------------------------------------------------
// ** SAME AS PADSTART BUT IT ADDS THE ELEMENTS FROM THE END

// ^^ -------------------------------------------------- STRING SEARCHES -----------------------------------------------------------------

//13 - STRING SEARCHES  - INDEXOF ------------------------------------------------------------------------------------------

let goal = "please locate where the destination is ";
let dst = goal.indexOf("destination");
console.log(dst);

//14 - STRING SEARCHES  - LASTINDEXOF ------------------------------------------------------------------------------------------

let text = "please locate where the destination is ";
let index = text.lastIndexOf("destination");
console.log(index);

//15 - STRING SEARCHES  - SEARCH ------------------------------------------------------------------------------------------

let textsr = " this is a test to see how the search method works test test";
let textsr2 = textsr.search("test");
console.log(textsr2);

let textsr3 = textsr.search(/test/);
console.log(textsr3);

//16 - STRING SEARCHES  - MATCH ---------------------------------------------------------------------------------------------

let textmat = "The rain in SPAIN stays mainly in the plain";
let mtch = textmat.match("SPA");
console.log(mtch);

let mtch2 = textmat.match(/ain/gi);
console.log(mtch2);

//17 - STRING SEARCHES  - MATCHALL---------------------------------------------------------------------------------------------

let mtchtext =
  "i love dogs , once is had 2 dogs , they were so kind , my dogs were so beautiful";
let mtchTextResult = mtchtext.matchAll(/dogs/g);
console.log(mtchTextResult);

//18 - STRING SEARCHES  - INCLUDES ---------------------------------------------------------------------------------------------

let includetext =
  "i love dogs , once is had 2 dogs , they were so kind , my dogs were so beautiful";
let includ = mtchtext.includes("dogs");
console.log(includ);

//19 - STRING SEARCHES  - STRATSWITH()  &  ENDSWITH() -----------------------------------------------------------
let startendtext =
  "pourya love dogs , once is had 2 dogs , they were so kind , my dogs were so beautiful";

let startw = startendtext.startsWith("pourya");
console.log(startw);

let endw = startendtext.endsWith("beautiful");
console.log(endw);

// ** EXAM --------------------------------------------------------------------------------------------------------
// ^^ MATCH
let mtch3 = "my name is pourya , POURYA is my name , They call me Pourya ";
let mtcsh3res = mtch3.match(/pourya/gi);
console.log(mtcsh3res);
// ^^ INCLUDE
let mtchInclude = mtch3.includes(`pourya`);
console.log(mtchInclude);
// ^^ STARTSWITH AND ENDSWITH
let mtchStart = mtch3.startsWith(`my`);
console.log(mtchStart);

let mtchEnd = mtch3.endsWith(`Pourya `);
console.log(mtchEnd);

// ^^ ---------------------------------------- STRING TEMPLATES ----------------------------------------------------
// & INTERPOLATION -------------------------------------------------------------------------------------------------
let firstName = `Pourya`;
let lastName = `Soleimani`;
let welCome = `Welcome back ${firstName} ${lastName}`;
console.log(welCome);
// & --------------------------------------------------------------------------------------------------------------
let standard = "Your weight is";
let weight = 89;
let kg = "Kilogram";

let msg = `${standard} ${weight} ${kg}`;
console.log(msg);
// -----------------------------------------------------------------------------------------------------------------
let friendFirstName = "majid"
let friendLastName = "kalhor"
let friendAge = '30'
console.log(`${friendFirstName}` + " " + `${friendLastName}` + " " + `${friendAge}`);

// & EXPRESSION SUBSTITUTION --------------------------------------------------------------------------
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// ---------------------------------------------------------------------------------------------------
