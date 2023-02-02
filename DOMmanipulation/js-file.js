const container = document.querySelector('#container')
const content = document.createElement('p');
content.textContent = "Hey I'm Red";
content.style.color ='red';
container.appendChild(content);

const header3 = document.createElement('h3');
header3.textContent = "I'm in a div";
header3.style.color = 'blue';
container.appendChild(header3);

const div1 = document.createElement('div');
div1.setAttribute('style', 'border: 1px solid black', 'backgroundColor:pink')

const header1 = document.createElement('h1');
header1.textContent = 'Im in a div';
const p1 = document.createElement('p');
p1.textContent = 'ME TOO';

div1.appendChild(header1);
div1.appendChild(p1);

document.querySelector('body').appendChild(div1);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });



