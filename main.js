// Query Selectors grabbing divs and creating elements
var scores = document.querySelector("#score");
var timer = document.querySelector("#time");

var questionDiv = document.querySelector("#question");
var a0Div = document.querySelector("#a0");
var a1Div = document.querySelector("#a1");
var a2Div = document.querySelector("#a2");
var a3Div = document.querySelector("#a3");
var startButton = document.querySelector("#a4");

var form = document.querySelector("#form");
var submit = document.querySelector("#submit");
var inputPassword2 = document.querySelector("#inputPassword2");

var list = document.querySelector("#list");

var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");

// Using an array to store the questions and answers
var dataStructure = [
  {
    q: "Inside which HTML element would you add Javascript to the page?",
    a: ["<javascripts>", "<scripting>", "<js>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    q:
      "What do you call the type of value that determines if something is true or false?",
    a: ["Boolean", "Variable", "String", "Argument"],
    correctAnswer: "Boolean",
  },
  {
    q: "Which punctuation is used to surround a string?",
    a: ["Parentheses", "Square Brackets", "Carrots", "Quotation Marks"],
    correctAnswer: "Quotation Marks",
  },
  {
    q: "Which HTML element is used to create a paragraph?",
    a: ["<a>", "<h1>", "<p>", "<body>"],
    correctAnswer: "<p>",
  },
  {
    q: "Which are the correct punctuation for an array?",
    a: ["Square Brackets", "Quotation Marks", "Parentheses", "Commas"],
    correctAnswer: "Square Brackets",
  },
  {
    q: "How do you refer to a class in CSS?",
    a: [".class", "<class>", "class;", "(class)"],
    correctAnswer: ".class",
  },
  {
    q: "Which is a CSS framework?",
    a: ["React", "Node", "jQuery", "Bootstrap"],
    correctAnswer: "Bootstrap",
  },
  {
    q: "Which function is written correctly?",
    a: [
      "function myFunction()",
      "function myFunction{}",
      "function myFunction[]",
      "function.myFunction",
    ],
    correctAnswer: "function myFunction()",
  },
  {
    q: "Which HTML element holds the metadata?",
    a: ["<link>", "<script>", "<head>", "<body>"],
    correctAnswer: "<head>",
  },
  {
    q: "In CSS, which symbol is used to refer to an ID?",
    a: ["+", "#", ".", "$"],
    correctAnswer: "#",
  },
];

// Data structure index starting point
var index = 0;

// Final question
var questionFinal = dataStructure.length;

// Scoreboard
var scoreBoard = 0;

// Timer
var secondsLeft = 60;

// Start Screen
questionDiv.textContent = "Welcome to the Coding Quiz";

// Score Function
function scoreKeeper() {
  scores.textContent = scoreBoard;
}

// On Click Event to Start Game
startButton.addEventListener("click", startGame);

// Function to start game
function startGame() {
  countDown();
  startButton.classList.add("hide");
  card2.classList.add("hide");
  a0Div.classList.remove("hide");
  a1Div.classList.remove("hide");
  a2Div.classList.remove("hide");
  a3Div.classList.remove("hide");
  newQuestion();
}

// Timer function
function countDown() {
  var timerInterval = setInterval(function () {
    timer.textContent = "Time Left: " + secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0 || index == questionFinal) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

//    Function to make questions appear
function newQuestion() {
  // Starting point for the questions
  var questionIndex = dataStructure[index];

  // Question text plus assigning data-answer
  questionDiv.textContent = questionIndex.q;
  a0Div.textContent = questionIndex.a[0];
  a0Div.setAttribute("data-answer", questionIndex.a[0]);
  a1Div.textContent = questionIndex.a[1];
  a1Div.setAttribute("data-answer", questionIndex.a[1]);
  a2Div.textContent = questionIndex.a[2];
  a2Div.setAttribute("data-answer", questionIndex.a[2]);
  a3Div.textContent = questionIndex.a[3];
  a3Div.setAttribute("data-answer", questionIndex.a[3]);
  // Event listeners for answer buttons
  a0Div.addEventListener("click", checkAnswer);
  a1Div.addEventListener("click", checkAnswer);
  a2Div.addEventListener("click", checkAnswer);
  a3Div.addEventListener("click", checkAnswer);
}

// Check to see if button clicked was correct answer
function checkAnswer() {
  var answer = dataStructure[index].correctAnswer;
  index++;
  var correctChoice = event.target.getAttribute("data-answer");
  if (answer === correctChoice) {
    scoreBoard++;
    scoreKeeper();
    newQuestion();
  } else {
    secondsLeft = secondsLeft - 5;
    newQuestion();
  }
}

// Function for Game Over screen
function gameOver() {
  timer.classList.add("hide");
  question.textContent = "Please enter your initials to record your score";
  a0Div.classList.add("hide");
  a1Div.classList.add("hide");
  a2Div.classList.add("hide");
  a3Div.classList.add("hide");
  form.classList.remove("hide");
  submit.addEventListener("click", submitForm);
}

function submitForm(event) {
  event.preventDefault();
// Acquire data from local storage, if any
  var localStorageScores = localStorage.getItem('scores');
  if (localStorageScores) {
    var parsedStorage = JSON.parse(localStorageScores);
    var initials = inputPassword2.value;
    var score = scoreBoard;
    var scoreList = {
      initials: initials,
      score: score,
    };
    var newScore = parsedStorage.topScores;
    newScore.push(scoreList);
    var stringifiedScores = JSON.stringify(newScore);
    console.log(stringifiedScores)
    localStorage.setItem('scores', stringifiedScores);
  } else {
    var storage = [];
    var initials = inputPassword2.value;
    var score = scoreBoard;
    var scoreList = {
      initials: initials,
      score: score,
    };
    storage.push(scoreList);
    var newObject = {};
    newObject['topScores'] = storage;
    var stringifiedScores = JSON.stringify(newObject);
    localStorage.setItem('scores', stringifiedScores);
  }
  
//   Acquire local storage again to populate the top scores
  var getScores = localStorage.getItem('scores');
  var parsedScores = JSON.parse(getScores);
  console.log(parsedScores);

// Remove the game card and display the topscores card
  card1.classList.add("hide");
  card2.classList.remove("hide");

    if (parsedScores.topScores) {
        for (const score of parsedScores.topScores) {
            var newName = document.createElement("p");
            newName.textContent = score.initials + " " + score.score;
            list.appendChild(newName);
        }
    } else {
        for (const score of parsedScores) {
            var newName = document.createElement("p");
            newName.textContent = score.initials + " " + score.score;
            list.appendChild(newName);
        }
}
  


  

  
}
