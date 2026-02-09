//destructing from array
const scores = [11,22,33,44,55,66,77];

const firstScore = scores[1];
const secondScore = scores[2];
console.log(firstScore,secondScore)

const[first,second,third] = scores;
console.log(first,second,third);

// destructing from object

// const user = {
//     id: 101,
//     name: "Aryan Kumar",
//     username: "aryan_cse",
//     email: "aryan@gmail.com",
//     password: "Aryan@123",
//     age: 20,
//     role: "student",
//     isActive: true,
//     city: "Yamunanagar",
//     state: "Haryana",
//     country: "India"
//     }
//     const {email,password,city,age} = user;
// console.log(email,password,age,city);

//Parameter destructuring

const user1 = {
    id: 102,
    name: "Rohit Sharma",
    username: "rohit_01",
    email: "rohit01@gmail.com",
    password: "Rohit@456",
    age: 21,
    role: "student",
    isActive: true,
    city: "Delhi",
    state: "Delhi",
    country: "India"
    }
   function detail({email,password}){
        console.log(`${email} ${password}`)
   }
   detail(user1)
