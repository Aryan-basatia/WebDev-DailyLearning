const multiply = (x,y) => x*y;

const square = x => multiply(x,x);

const isRightTriangle = (a,b,c) => (
    square(a) + square(b) === square(c)
)
console.log(isRightTriangle(3,4,5));

// so first rightTringle call square, square then multiply so js has to keep track of all function and where they are so it make a stack in which on top is multiply then square and then rightTriangle so multiply run first

