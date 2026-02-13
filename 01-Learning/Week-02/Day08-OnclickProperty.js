const btn = document.querySelector('#v2');

btn.onclick = function (){
    console.log("Hii!!!");
    console.log("How are you");
};

function  scream(){
    console.log("ohh");
    console.log("Daddy")
}
btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => alert('You clicked me');