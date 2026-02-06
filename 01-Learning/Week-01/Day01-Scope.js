function Collect_eggs(){
    let eggs = 5;
    console.log(eggs)
}
Collect_eggs();
//console.log(eggs) it gave error because eggs is defined in function so scope is working here it define in function

let name = "Aryan"
function FullName(){
    let name = "Aryan Jaat"
    console.log(name) // it run closest name
}
FullName()
console.log(name)

//Block Scope var exist in only a block
let radius = 5;
if(radius > 5){
    const Pi = 3.14;
    let msg = "hi";
}
// console.log(radius)
// console.log(msg)

//Lexical Scope

function Bank_Robbery(){
    let names = ["Aryan","Spiderman","Thor"]
    function cryforhelp(){
        for(let name of names){
            console.log("Help us")
        }
    }
    cryforhelp()
}
Bank_Robbery()