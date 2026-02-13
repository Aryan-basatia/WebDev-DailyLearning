const button = document.querySelector('#btn1');
const button1 = document.querySelector('#btn2');

function shout() {
    console.log("shout");
}
function twist() {
    console.log("twist");
}

button.addEventListener('click', () => alert("clicked"));
button1.addEventListener('click',twist);
button1.addEventListener('click',shout);
