//we do not need parenthesis when only one parameter
const square = x => {
    return x*x
}
console.log(square(4))

const multiply = (x,y) => {
    return x*y;
}
console.log(multiply(2,3))

const  rollDice = () =>(
  Math.floor(Math.random()*6)+1
) //When need only one line return code
console.log(rollDice())

//Implicit return run when only one expression or line of code in function
const add = (a,b) => a+b;
console.log(add(2,5));




