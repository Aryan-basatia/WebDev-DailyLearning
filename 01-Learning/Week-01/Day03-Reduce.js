const nums = [11,23,45,67,89,100];

const total =nums.reduce((total,num) => total + num);
console.log(total);

const minimum = nums.reduce((min,num) => {
    if(num < min){
        return num;
    } else{
        return  min;
    }
});
const maximum = nums.reduce((max,num) => {
    if(num > max){
        return num;
    } else{
        return  max;
    }
});

console.log(minimum);
console.log(maximum);
