const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click',function (e){
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
});
container.addEventListener('click',function (){
    container.classList.add('hide')
});

const randomColor = () => {
    const r =Math.floor(Math.random()*256);
    const g =Math.floor(Math.random()*256);
    const b =Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
};