//  **** EVENTS =============================================================================================================================================
let a = document.getElementById(`head`)
function hello() { console.log(`hello world !`); }
// ^ EVENT HANDLERS  =============================================================================================================================================
let clock = document.getElementById(`clock`)
let text = document.getElementById(`text`)
function showTime() { document.getElementById(`text`).textContent = Date(); }

// & EVENT LISTENERS =============================================================================================================================================

let el1 = document.getElementById(`el1`)

function hover() {
  let el1 = document.getElementById(`el1`)
  el1.classList.remove(`bg-slate-900`)
  el1.classList.add(`bg-yellow-500`)
}

function hoverout() {
  let el1 = document.getElementById(`el1`)
  el1.classList.remove(`bg-yellow-500`)
  el1.classList.add(`bg-slate-900`)
}

function showText() {
  let tx = document.createElement(`h2`)
  document.body.appendChild(tx)
  let el1 = document.getElementById(`el1`).after(tx)
  tx.textContent = "YOU DID IT !"
  tx.classList.add("text-sky-500")
  tx.classList.add("text-3xl")
  tx.classList.add("font-bold")
}

function el2hover() {
  let el2 = document.getElementById(`el2`)
  el2.classList.remove("bg-rose-700")
  el2.classList.add("bg-sky-700")

}
function el2hoverout() {
  let el2 = document.getElementById(`el2`)
  el2.classList.remove("bg-sky-700")
  el2.classList.add("bg-rose-700")
}

function log() {
  console.log(`test button activated !`);
  document.getElementById(`test`).classList.add(`text-emerald-800`, `transition-all`, `duration-300`)
}


function changeColor() {
  document.getElementById(`myBtn`).classList.remove(`bg-orange-600`)
  document.getElementById(`myBtn`).classList.add(`bg-emerald-600`)
  document.getElementById(`myBtn`).classList.add(`text-slate-200`)
}



// & STOP PROPAGATION & PREVENTDEFAULT _____________________________________________

