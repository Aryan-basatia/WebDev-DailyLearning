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
//map practise

let marks = [50, 60, 70];

let finalMarks = marks.map( function (mark){
    let grace = 10;
    let addedGrace = mark*grace/100;
    return mark + addedGrace;
})
console.log(finalMarks)

let prices = [10, 20, 30];

let finalPrice = prices.map(function (price){
    let discount = 10;
    let discountValue = price*discount/100;
    return price - discountValue
})
console.log(finalPrice)