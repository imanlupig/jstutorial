// function declarations
// function greet(){
//   console.log('Hello there!');
// }

// // function expression
// const speak = function(){
//   console.log('Good Day!');
// };

// greet();
// speak();

// arguments and parameters

// const speak = function(name = 'Mario', time = 'Night'){
//   console.log(`Good ${time} ${name}`);
// };

// speak('ian', 'Morning');
// speak();

// returning values

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// let area = calcArea(5);
// console.log(area);


// arrow function
let calcAreaArrow = radius => 3.14 * radius**2;
console.log(calcAreaArrow(5));

// practice arrow function
let greet = () => 'Hello World';
console.log(greet());

// #2
let bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}

let newBill = bill([10, 15, 30], .2);
console.log(newBill);