const form = document.querySelector('#ShelterForm');
const input = document.querySelector('#inputText');
const list = document.querySelector('#cats');

// form.addEventListener("submit",function (e){
//     e.preventDefault();
//     console.log('submitted');
// })  it stop this if submit something page did not reload or do something

form.addEventListener('submit',function (e){
    e.preventDefault();

    const  catName = input.value;
    const li = document.createElement('li');

    li.innerText = catName;
    list.appendChild(li);
    input.value = "";

})


