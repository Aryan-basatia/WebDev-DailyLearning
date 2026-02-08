//setTimeout
console.log("hello");
setTimeout(() =>{
    console.log("are you still there");
},3000);

console.log("Goodbye");

//setInterval
const id =setInterval(()=>{
    console.log(Math.random())
},3000);
clearInterval(id) //to stop that interval
