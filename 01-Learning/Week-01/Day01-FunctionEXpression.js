//Function Expression
function add(x,y){
    console.log(x+y);
}
add(2,3);

const square = function (num){
    console.log(num*num)
}
square(10);

//Higher order function

//Taking function as argument
function TwentyTimes(func){
    for(let i =0;i<20;i++){
        func()
    }
}
function rollDice(){
    console.log(Math.floor(Math.random() * 6)+1)
}

TwentyTimes(rollDice)

//Taking function as return

function winLottery(){
    let num = Math.floor(Math.random()*10)+1
    if(num < 3){
        console.log("You win the lottery!!")
    }
    else {
        console.log("ooo! you loose the lottery")
    }
}
winLottery()

function makeBetweenFunc(min,max){
    return num >= min && num <= max;
}
