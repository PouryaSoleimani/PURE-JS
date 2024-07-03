// ! EVENT BUBBLING ---------------------------------------------------------------------------------------------------
let div = document.querySelector(`#div11`)
let span = document.querySelector(`#span`)
let btn = document.querySelector(`#btn1`)

btn.addEventListener("click", (e) => {
  // e.stopPropagation()
  // e.preventDefault()
  console.log(`BTN WAS CLICKED`);
})

span.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log(`SPAN WAS CLICKED`);
})

div.addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log(`DIV WAS CLICKED`);
})

// ! EVENT CAPTURING --------------------------------------------------------------------------------------------------
//  EventCapturing is the procces just in the opposite form of the eventbubbling , eventbubbling starts from event target and goes up till the root.
// but event capturing starts from the root and goes down till the event target 
