const number = document.getElementById("counting-num");

const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

number.textContent = count;


function increaseCount() {
    count++; // count = count + 1
    showNumber();
}

function decreaseCount() {
    count--;
    showNumber();
}

function resetCount() {
    count = 0;
    showNumber();
}

function showNumber(){
    if(count>0){
        number.style.color = `rgba(${count},0,0)`;
    }
    else if (count < 0) {
        number.style.color = `rgba(0, ${-count}, 0, 1)`;
    } else {
        number.style.color = 'black';
    }  
    number.textContent = count;
}

incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
 