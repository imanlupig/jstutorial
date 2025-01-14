// const para = document.querySelector('p');
// console.log(para)

// const error = document.querySelector('.error')
// console.log(error)

// const error2 = document.querySelector('div.error');
// console.log(error2);

// const header1 = document.querySelector('body > h1');
// console.log(header1);

// const paras = document.querySelectorAll('p');
// paras.forEach(para => console.log(para))

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors)

// get elements by tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);


// let para1 = document.querySelector('p');
// // para1.innerText = " ninjas are cool";
// // console.log(para1);

// let paras = document.querySelectorAll('p');
// // paras.forEach(para => {
// //   console.log(para.innerText);
// //   para.innerText += '!';
// // })

// let content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML += '<h2>this is a new h2</h2>';
// // console.log(content.innerHTML)

// const people = ['ian', 'mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// })

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://youtube.com');
link.innerText = 'YouTube.com';
console.log(link.getAttribute('href'));

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');
console.log(mssg.getAttribute('class'));