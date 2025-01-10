// logical NOT ( ! )

// let user = false;

// if(!user) {
//   console.log('you must be logged in to continue');
// }



// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

  if(scores[i] === 0){
    continue;
  }

  console.log('your score is: ', scores[i]);

  if(scores[i] === 100){
    console.log('Congrats, you reached the top score!');
    break;
  }
}