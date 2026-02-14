// const list = document.querySelector('#list');
//
// list.addEventListener('click',function (e){
//     if(e.target.tagName === 'LI'){
//         console.log(e.target.innerText)
//     }
// })

const btn = document.querySelector('#addItem');
const list = document.querySelector('#list');

btn.addEventListener('click',function (){
    const li = document.createElement('li');
    li.innerText = "New item";
    list.appendChild(li)
})

list.addEventListener('click',function (e){
    e.target.tagName === 'LI' && e.target.remove();
})