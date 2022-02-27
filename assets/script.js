const questions = [
  {
    question: 'Which of the following JavaScript operators would you use to check strict equality between two different values?',
    choices: ['A. ===', 'B. ==', 'C. <=>', 'D. (=)'],
    correctAnswer: 'A. ===',
  },
  {
    question: 'Which of the following is not a JavaScript data type?',
    choices: ['A. string', 'B. delta', 'C. number', 'D. boolean'],
    correctAnswer: 'B. delta',
  },
  {
    question: 'What is the following line of code an example of? var cats = ["Maine Coon", "Scottish Fold", "Tabby", "Siamese"]',
    choices: ['A. for loop', 'B. boolean', 'C. array', 'D. const'],
    correctAnswer: 'C. array',
  },
  {
    question: 'Which method would you use to remove the last element from an array?',
    choices: ['A. pop()', 'B. removeLast()', 'C. push()', 'D. flex()'],
    correctAnswer: 'A. pop()',
  },
  {
    question: 'Which type of variable has a value that is unable to be reassinged?',
    choices: ['A. perm', 'B. let', 'C. var', 'D. const'],
    correctAnswer: 'D. const',
  }];

let timeLeft = 60;

const timer = document.querySelector("#timer");
const btnStart = document.querySelector("#btn-start");




const startGame = function () {
  console.log('Game has started');
  timer.classList.remove('hide');

  let timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft === 0 || timeLeft <= 0) {
      console.log('game has ended');
      clearInterval(timerInterval);
      console.log('Game has ended.')
    }
  }, 1000);
};

btnStart.addEventListener("click", startGame);
