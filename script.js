var currentQuestionIndex = 0;
var time = 60;
var timerInterval;
var score = 0;

var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var timerElement = document.getElementById("timer");
var endContainer = document.getElementById("end-container");
var scoreElement = document.getElementById("score");
var initialsForm = document.getElementById("initials-form");
var initialsInput = document.getElementById("initials");

var questions = [
    {
      question: "Question 1: Which keyword is used to declare variables in JavaScript?",
      choices: ["var", "let", "const", "int"],
      correctAnswer: 0
    },
    {
      question: "Question 2: Which method is used to add an element at the end of an array?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: 0
    },
    {
      question: "Question 3: What is the output of the following code?\n\nconsole.log(typeof null);",
      choices: ["object", "null", "undefined", "string"],
      correctAnswer: 0
    },
    {
      question: "Question 4: Which operator is used to concatenate strings in JavaScript?",
      choices: ["+", "-", "*", "/"],
      correctAnswer: 0
    },
    {
      question: "Question 5: What does the '===' operator do in JavaScript?",
      choices: ["Checks for equality in value and type", "Assigns a value to a variable", "Checks for inequality in value and type", "Compares two values for less than or equal to"],
      correctAnswer: 0
    }
  ];
  

  