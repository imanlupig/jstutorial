// variables & block scope
let age = 30;

if(true){
  let age = 40;
  let name = 'ian'
  console.log('inside 1st code block: ', age, name);
}

  if(true){
    let age = 50;
    console.log('inside second code block: ', age);
  }
console.log('outside code block', age, name);