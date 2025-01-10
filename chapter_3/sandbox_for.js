// for loops
// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i);
// }
// console.log('loop is finished');

const names = ['ian', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i])
  let html = `
    <h1> ${names[i]} </h1>
  `
  console.log(html)
}