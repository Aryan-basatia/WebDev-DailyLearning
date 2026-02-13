const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click',function (){
   if (input.value === "") return;

   const li = document.createElement('li');
   li.innerText = input.value;

   const  deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'delete';
   deleteBtn.addEventListener('click',function (){
       li.remove();
   })

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    input.value = ""
})