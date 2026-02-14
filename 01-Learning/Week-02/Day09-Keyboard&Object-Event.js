const button = document.querySelector('button');
const input = document.querySelector('input');

// event object evt
button.addEventListener('click',function (evt){
    console.log(evt)
});

// keyboard events

input.addEventListener('keydown',function (evt){
    switch (evt.code){
        case 'ArrowUp':
            console.log('Up!!');
            break;
        case 'ArrowDown':
            console.log('Down');
            break;
        default:
            console.log('ignored');
    }
})
// input.addEventListener('keyup',function (e){
//     console.log(e.key);
//     console.log(e.code);
// })