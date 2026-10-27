let heading  = document.querySelector("#counter");
let decreaseBtn =  document.querySelector("#decreaseBtn");
let resetBtn =  document.querySelector("#resetBtn");
let increaseBtn =  document.querySelector("#increaseBtn");

let count = 0;

function increase() {
    count = count + 1;
    counter.textContent = count;
}

increaseBtn.addEventListener("click", increase);


function decrease() {
    count = count - 1;
    counter.textContent = count;
}

decreaseBtn.addEventListener("click", decrease);

function reset(){
    count = 0;
    counter.textContent = count;
}
resetBtn.addEventListener("click", reset);
