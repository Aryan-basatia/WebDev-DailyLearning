const num = [1,2,3,4,5,6,7,8,9,10];

console.log(Math.max(num));
console.log(Math.max(...num));
console.log(Math.min(...num));// it work on array to gave element of array as different element to a function

const boys = ["Aryan","John","Joy"];
const girls = ["abc","def"];

console.log(...boys, ...girls)//make two arrat to one


const student1 = {
    name: "Aryan",
    age: 20,
    branch: "CSE",
    marks: 85
};

const student2 = {
    name: "Rahul",
    age: 21,
    branch: "ECE",
    marks: 78
};
console.log(student1)
