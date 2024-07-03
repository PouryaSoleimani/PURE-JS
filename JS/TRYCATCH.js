"use strict";
//  ^ TRY & CATCH / FINALLY  ------------------------------------------------------------------------------

try {
  if (true) {
    throw "This is an Error ! ! !";
  }
} catch (error) {
  console.log(error);
}
finally {
  console.log(`test for finally !`);
}