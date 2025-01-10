/* let year = 2025;
let age = 27;

console.log(age, year);

age = 30;
console.log(age)

const points = 100;
console.log(points)

var score = 75;
console.log(score)
//single line comment

multi
  line
  comments
  */


// strings
// console.log('hello world');

// let email = 'ian@example.com'
// console.log(email);

// // string concatenation
// let firstName = 'Ian';
// let lastName = 'Manlupig';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[0]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);
// console.log(fullName, result);

// let index = email.indexOf('@');
// console.log(index)

//common string methods
// let email = 'ian@example.com';
// let result = email.lastIndexOf('e');
//let result = email.slice(0, 5);
// let result = email.substr(0, 10);
// let result = email.replace('m', 'w');

// console.log(result);


// template strings
const title = 'Best reads of 2025';
const author = 'Ian';
const likes = 30;

// concantenation way
// let result = "The blog called " + title + ' by ' + author + ' has ' + likes + ' likes';

// template literal way
let result = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let html = `
  <h2>The blog called ${title}</h2>
  <p>by ${author}</p>
  <span>has ${likes} likes</span>
`;


console.log(html);
