// if statements
// const age = 25;

// if(age > 20){
//   console.log('you are over 20');
// }

// //if statements with data
// const ninjas = ['Leo', 'Raph', 'Don', 'Mikey'];

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas");
// }

const password = '1224@45';

// if(password.length >= 8) {
//   console.log('password is long enough');
// }

// else if statements
if(password.length >= 12 && password.includes('@')){
  console.log('Mighty password');
} else if(password.length >= 8 || password.includes('@') && password.length > 5) {
  console.log('password is strong enough');
} else {
  console.log('password is too short');
}

