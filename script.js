let textareaEl = document.getElementById("textarea");
let totalcounterEl = document.getElementById("total-counter");
let remainingCounterEl = document.getElementById("remaining-counter");


function updateCounter(){
    totalcounterEl.textContent=textareaEl.value.length;
    remainingCounterEl.textContent=50-textareaEl.value.length
}

textareaEl.addEventListener("keyup",updateCounter)
