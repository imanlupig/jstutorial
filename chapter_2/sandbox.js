// let age = null;
// console.log(age, age + 3, `the age is ${age}`); //browser gives the value of undefined, NaN because there is a variable but we explicitly defined it with no value

// Booleans
// console.log(true, false, 'true', 'false');

// methods
let email = 'ian@example.com';
let names = ['ian', 'aniel'];

// let result = email.includes('@');
// let result = names.includes('ian');
// console.log(result);

// Comparison Operators
let age = 27;

// console.log(age == 27);
// console.log(age == 25);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'ian';

// console.log(name == 'ian');
// console.log(name == 'Ian');
// console.log(name > 'alan'); //will show as true because 'a' in alan is greater than 'i' in ian
// console.log(name > 'Ian'); //lowercase letters are first in the ASCII chart so i > I


// loose comparison (different tpes can still be equal)
// console.log(age == 27);
// console.log(age == '27'); //types get converted
// console.log(age != 27);
// console.log(age != '27');

// strict comparison (different types cannot be equal)
// console.log(age === 27);
// console.log(age === '27'); //will show as false because javascript will not convert the types
// console.log(age !== 27);
// console.log(age !== '27');

//type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score)

// let result = String(50);

// let result = Boolean(100);
let result = Boolean('0');
console.log(result, typeof result);