'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.result_number').textContent);
// document.querySelector('.result_number').textContent = 13;
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

// const secretnumber = (Math.random() * 20 + 1) | 0;
// let score = 20;
// document.querySelector('.result_number').textContent = secretnumber;

// document.querySelector('.check').addEventListener('click', function () {
//   const guessNumber = Number(document.querySelector('.guess').value);
//   console.log(guessNumber, typeof guessNumber);
//   if (!guessNumber) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//   } else if (guessNumber === secretnumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//   } else if (guessNumber > secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guessNumber < secretnumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the Game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

let secretNumber = (Math.random() * 20 + 1) | 0;
let score = 20;
let highScore = 0;
// document.querySelector('.result_number').textContent = secretNumber;
const displayMessage = function (Message) {
  document.querySelector('.message').textContent = Message;
};
document.querySelector('.btn_again').addEventListener('click', function () {
  score = 20;
  secretNumber = (Math.random() * 20 + 1) | 0;
  document.querySelector('.result_number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.result_number').style.width = '20% ';
});

document.querySelector('.check').addEventListener('click', function () {
  // debugger;
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);
  if (!guessNumber) {
    displayMessage('⛔ No Number!');
    // document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.result_number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.result_number').style.width = '25%';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // } else if (guessNumber > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guessNumber < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = '📈 Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = '💥 You lost the Game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
  } else if (guessNumber !== secretNumber) {
    // debugger;
    if (score > 1) {
      // document.querySelector('.message').textContent =
      guessNumber > secretNumber
        ? displayMessage('📈 Too High!')
        : displayMessage('📈 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the Game!';
      displayMessage('💥 You lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  } else {
    console.log('Something Wring in you code');
  }
});
