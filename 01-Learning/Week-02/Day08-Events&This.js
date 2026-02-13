const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
const buttons = document.querySelectorAll('button');

for (let button of buttons){
    button.addEventListener('click',colorRandom)
}

function colorRandom(){
    const randomColor = makeRandomColor();
    this.style.backgroundColor = randomColor;
    this.style.color = randomColor;
}