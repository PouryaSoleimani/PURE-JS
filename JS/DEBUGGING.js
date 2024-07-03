var i = 0;
var list = [];

while (i < 10) {
  
  if (i % 2 === 0) {
    console.log(`even`);
  } else {
    console.log(`odd`);
  }
  if (i % 2 !== 0) {
    list.push(i);
  }
  i++;
}
console.log(list);
