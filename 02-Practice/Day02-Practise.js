// foreach practise

let number = [1,2,3,4,5];

function square(num){
    console.log(`Our num is ${num}`)
    console.log(num*num)
}
number.forEach(square);

let names = ["aryan", "rahul", "neha"];

names.forEach(function (name){
    console.log(name.charAt(0).toUpperCase() + name.slice(1))
})