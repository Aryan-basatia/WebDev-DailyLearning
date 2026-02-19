// does not need to remember

const req = new XMLHttpRequest();

req.onload = function (){
    console.log("It's Working");
    console.log(this.responseText);
}// for working

req.onerror = function (){
    console.log("error");
    console.log(this.responseText);
} // for error

req.open("GET","https://icanhazdadjoke.com/");
req.send();