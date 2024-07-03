let input = document.getElementById(`input`)
let displayer = document.getElementById(`displayer`)
// console.log(input);
input.onkeydown = () => {
    let key = event.key
    if (key === "Enter") {
        displayer.innerHTML = input.value;
        input.value = null
    } else {
        return
    }
}

let span1 = document.getElementById(`1`);
let span2 = document.getElementById(`2`);
let span3 = document.getElementById(`3`);
let span4 = document.getElementById(`4`);

