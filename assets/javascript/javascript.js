// Function to shuffle the order of answer options
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}

// Array of questions and answer options
var myQuestions = [
  {
    question: "What is JavaScript used for?",
    correct: "Adding interactivity to web pages",
    answers: shuffleAnswers([
      "Adding interactivity to web pages",
      "Styling web pages",
      "Creating web pages",
      "Managing databases",
    ]),
  },
  {
    question: "What is a variable in JavaScript",
    correct: "A container for storing data",
    answers: shuffleAnswers([
      "A container for storing data",
      "A function that returns a value",
      "A conditional statement",
      "A loop",
    ]),
  },
  {
    question: "What is a function in JavaScript",
    correct: "A block of code that performs a task",
    answers: shuffleAnswers([
      "A block of code that performs a task",
      "A data type for storing text",
      "A way to style web pages",
      "An object that represents a collection of elements",
    ]),
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    correct: "//",
    answers: shuffleAnswers(["//", "/* */", "$$$$", "#"]),
  },
  {
    question: "What is a loop in JavaScript",
    correct: "A way to repeat code multiple times",
    answers: shuffleAnswers([
      "A way to repeat code multiple times",
      "A way to create a conditional statement",
      "A way to create a function",
      "A way to style web pages",
    ]),
  },
];

// Set the current page to the first question
var currentPage = 0;
var score = 0;
var secondsRemaining = 60;

var timer = document.getElementById("timer");

timer.innerHTML = secondsRemaining + " seconds remaining";

// Tick down seconds remaining

setInterval(function () {
  if (secondsRemaining > 0) {
    secondsRemaining -= 1;
    updateTimeRemaining();
  } else {
    window.location = "./highscores.html";
  }
}, 1000);

// Get the question element and display the first question
var question = document.getElementById("question");
question.innerHTML = myQuestions[currentPage].question;
// Function to move to the next page/question
function nextPage() {
  // Increment the current page
  currentPage++;
  // Get the question element and display the next question
  question.innerHTML = myQuestions[currentPage].question;
  // Get all the answer buttons and update their text to display the new answer options
  var answerButtons = document.querySelectorAll(".btn");
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerHTML = myQuestions[currentPage].answers[i];
  }
}

// Function to check user's answer
function checkAnswer(selectedAnswer) {
  var correct = myQuestions[currentPage].correct;
  var userAnswer = myQuestions[currentPage].answers[selectedAnswer];
  if (userAnswer === correct) {
    score += 1;
  } else {
    secondsRemaining -= 10;
    updateTimeRemaining();
  }

  // If the current page is the last question, redirect to the high score page
  if (currentPage == myQuestions.length - 1) {
    window.location = "./initials-form.html?score=" + score;
  }
  // Move to the next page/question
  nextPage();
}
function updateTimeRemaining() {
  timer.innerHTML = secondsRemaining + " seconds remaining";
}
// When the window loads, go to the first page/question
window.onload = function () {
  nextPage();
};
