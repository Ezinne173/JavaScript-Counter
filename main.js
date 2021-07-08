let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let counterValue = document.getElementById("counterValue");

let counter = 0;


if (increment) {
    increment.addEventListener("click", () => {
        if (counter < 50){
            counter++;
            counterValue.innerHTML = counter
        }
   
    })
}

if (decrement) {
    decrement.addEventListener("click", () => {
        if (counter > 0){
            counter--;
            counterValue.innerHTML = counter
        }

    })
}

