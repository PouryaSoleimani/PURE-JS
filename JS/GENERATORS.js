// !  FIRST TYPE WITH FOROF ---------------------------------------------------------------------
function* calc(num1, num2, num3) {
  let a = num1 + num2;
  yield a;

  let b = a * num3;
  yield b;

  let c = `THIS IS THE LAST TEXT`;
  yield c;
}

let calcRun = calc(2, 3, 5);
for (const ii of calcRun) {
  console.log(ii);
}
