const Calculator = {
    addition: function (x,y){
        console.log(x+y);
    },
    substraction(x,y){
        console.log(x-y)
    },
    multiply: function (x,y){
        console.log(x*y);
    },
    divide: function (x,y){
        console.log(x/y);
    }
}

Calculator.divide(10,4)
Calculator["multiply"](4,6)