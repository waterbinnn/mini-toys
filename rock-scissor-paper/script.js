const computer = document.querySelector('#comp_choice');
const user = document.querySelector('#user_choice');

const computerScore = document.getElementById('computer_score');
const userScore = document.getElementById('user_score');

const userRock = document.querySelector('#user_rock');
const userPaper = document.querySelector('#user_paper');
const userScissor = document.querySelector('#user_scissor');
const restart = document.querySelector('#reset_btn');
let result_ref = document.getElementById('result');

let [computer_score, user_score] = [0, 0];
let choices_object = {
  rock: {
    rock: 'draw',
    scissor: 'win',
    paper: 'lose',
  },
  scissor: {
    rock: 'lose',
    scissor: 'draw',
    paper: 'win',
  },
  paper: {
    rock: 'win',
    scissor: 'lose',
    paper: 'draw',
  },
};

function checker(input) {
  var choices = ['rock', 'paper', 'scissor'];
  var num = Math.floor(Math.random() * 3);

  computer.innerHTML = ` Computer choose <span> ${choices[
    num
  ].toUpperCase()} </span>`;

  user.innerHTML = ` You choose <span> ${input.toUpperCase()} </span>`;

  let computer_choice = choices[num];

  switch (choices_object[input][computer_choice]) {
    case 'win':
      result_ref.style.cssText = 'background-color: #cefdce; color: #689f38';
      result_ref.innerHTML = 'YOU WIN';
      user_score++;
      break;
    case 'lose':
      result_ref.style.cssText = 'background-color: #ffdde0; color: #d32f2f';
      result_ref.innerHTML = 'YOU LOSE';
      computer_score++;
      break;
    default:
      result_ref.style.cssText = 'background-color: #e5e5e5; color: #808080';
      result_ref.innerHTML = 'DRAW';
      break;
  }
  computerScore.innerHTML = computer_score;
  userScore.innerHTML = user_score;
}

const reset = () => {
  computer_score = 0;
  user_score = 0;
  computerScore.innerHTML = computer_score;
  userScore.innerHTML = user_score;
  result_ref.style.cssText = '';
  result_ref.innerHTML = '';
  computer.innerHTML = '';
  user.innerHTML = '';
};

document.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.id === 'user_rock') {
    checker('rock');
    restart.style.display = 'block';
  } else if (e.target.id === 'user_paper') {
    checker('paper');
    restart.style.display = 'block';
  } else if (e.target.id === 'user_scissor') {
    checker('scissor');
    restart.style.display = 'block';
  } else if (e.target.id === 'reset_btn') {
    restart.style.display = 'none';
    reset();
  }
});
