// Arrow function
const square = num => num*num;
console.log(square(8));

//setTimeout
setTimeout(() => console.log("Hello"),3000)

let students = [
    { name: "Aryan", marks: 80 },
    { name: "Rahul", marks: 45 },
    { name: "Neha", marks: 95 },
    { name: "Aman", marks: 30 }
];

const pass = students.filter(s => s.marks >= 50);
console.log(pass);

const names = pass.map(s => s.name);
console.log(names);

const total = pass.reduce((sum, s) => sum + s.marks, 0);
console.log(total);
