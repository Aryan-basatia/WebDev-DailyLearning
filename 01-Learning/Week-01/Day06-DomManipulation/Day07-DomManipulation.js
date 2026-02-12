//to find parent and sibling
const firstBold = document.querySelector('b');
console.log(firstBold.parentElement);
console.log(firstBold.parentElement.parentElement);

const paragraph = firstBold.parentElement;
console.log(paragraph.children);
console.log(paragraph.children[0]);

const firstSquare = document.querySelector('.square');
console.log(firstSquare.previousElementSibling);
console.log(firstSquare.previousSibling);
console.log(firstSquare.nextSibling);

// append to add something in webpage

const newH3 = document.createElement('h3');
newH3.innerText = "hello"
document.body.append(newH3);

const p =  document.querySelector('p');
p.append("I am Aryan ");

//For adding something before or after a element

const h2 = document.createElement('h2');
h2.append("Aryan");

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2);

// To remove class from a child old method and new
const b =document.querySelector('b');
b.parentElement.removeChild(b);

// new method to remove
const img = document.querySelector('img');
img.remove()
