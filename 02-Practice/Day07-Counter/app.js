const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const countDisplay = document.querySelector('#count');
let count = 0;

increase.addEventListener('click',function(){
    count++;
    countDisplay.innerText = count;
})
decrease.addEventListener('click', function (){
    count--;
    countDisplay.innerText = count;
})
reset.addEventListener('click', function () {
    count = 0;
    countDisplay.innerText = count;
})