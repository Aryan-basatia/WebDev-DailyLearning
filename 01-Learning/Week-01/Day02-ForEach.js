const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function even(element){
    if(element%2===0){
        console.log(`${element} is a even number`)
    }else{
        console.log(`${element} is a odd number`)
    }
};
numbers.forEach(even);