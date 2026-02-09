function welcome(name = "user"){
    console.log(`Welcome ${name}`)
}
welcome()
welcome("Aryan")

let nums1 = [1, 2, 3];
let nums2 = [4, 5];
const num3 = [...nums1,...nums2]
console.log(num3);

let user = { name: "Aryan", role: "Student" };
const newUser = { ...user, age: 20 };
console.log(newUser);

function multiplyAll(){
    let multiply = 1;
    for (let i=0;i <arguments.length;i++){
        multiply = multiply *arguments[i]
    }
    return multiply
}
console.log(multiplyAll(2,3,4,5));

let colors = ["red", "green", "blue"];
const [primary,secondary] = colors;
console.log(primary,secondary);

let student = {
    name: "Aryan",
    branch: "CSE",
    year: 2
};
const {name,branch} = student;
console.log(name,branch)