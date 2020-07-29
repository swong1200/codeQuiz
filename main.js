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

// Using an object to store the questions and answers
var dataStructure = [
    {
      q: "Inside which HTML element do we put the Javascript?",
      a: ["<javascripts>", "<scripting>", "<js>", "<script>"],
      correctAnswer: "<script>"
    },
    {
      q: "What do you call the type of value that determines if something is true or false?",
      a: ["Boolean", "Variable", "String", "Argument"],
      correctAnswer: "Boolean"
    },
    {
      q: "Which punctuation is used to surround a string?",
      a: ["Parentheses", "Square Brackets", "Carrots", "Quotation Marks"],
      correctAnswer: "Quotation Marks"
    },
    {
      q: "Which HTML element is used to create a paragraph?",
      a: ["a", "h1", "p", "body"],
      correctAnswer: "p"
    },
    {
      q: "Which are the correct punctuation for an array?",
      a: ["Square Brackets", "Quotation Marks", "Parentheses", "Commas"],
      correctAnswer: "Square Brackets"
    },
    {
      q: "How do you refer to class in CSS?",
      a: [".class", "<class>", "class;", "(class)"],
      correctAnswer: ".class"
    },
    {
      q: "Which is a CSS framework?",
      a: ["React", "Node", "JQuery", "Bootstrap"],
      correctAnswer: "Bootstrap"
    },
    {
      q: "Which function is written correctly?",
      a: ["function myFunction()", "function myFunction{}", "function myFunction[]", "function.myFunction"],
      correctAnswer: "function myFunction()"
    },
    {
      q: "Which HTML element holds the metadata?",
      a: ["<link>", "<script>", "<head>", "<body>"],
      correctAnswer: "<head>"
    },
    {
      q: "Which symbol is used to refer to an ID?",
      a: ["+", "#", ".", "$"],
      correctAnswer: "#"
    }
  ];

// Data structure index starting point
var index = 0

// Final question
var questionFinal = dataStructure.length;

// Scoreboard 
var scoreBoard = 0;

// Timer
var secondsLeft = 60;

// Start Screen
questionDiv.textContent = "Welcome to the Coding Quiz";
 
// Score Function
function scoreKeeper () {
  scores.textContent = scoreBoard;
}

// On Click Event to Start Game
startButton.addEventListener("click", startGame);

// Function to start game
function startGame() {
  countDown();
  startButton.classList.add("hide");
  a0Div.classList.remove("hide");
  a1Div.classList.remove("hide");
  a2Div.classList.remove("hide");
  a3Div.classList.remove("hide");
  newQuestion();
}

// Timer function
function countDown () {
  var timerInterval = setInterval(function() {
      timer.textContent = "Time Left: " + secondsLeft;
      secondsLeft--;
      if(secondsLeft <= 0 || index == questionFinal) {
        clearInterval(timerInterval);
        gameOver();     
      }
  }, 1000);
}



//    Function to make questions appear
function newQuestion () {
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
    console.log(questionIndex.a[1])
// Event listeners for answer buttons
    a0Div.addEventListener("click", checkAnswer);
    a1Div.addEventListener("click", checkAnswer);
    a2Div.addEventListener("click", checkAnswer);
    a3Div.addEventListener("click", checkAnswer);
    
}

// Check to see if button clicked was correct answer
function checkAnswer () {
      var answer = dataStructure[index].correctAnswer;
      index++
      console.log(answer)
      console.log(event.target.getAttribute("data-answer"))
        if (answer === event.target.getAttribute("data-answer")) {
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

function submitForm (event) {
  event.preventDefault();
  var initials = inputPassword2.value;
  var score = scoreBoard;
  var scoreList = [
    {
      initials: initials,
      score: score
    }
  ]
  
  var savedScore = localStorage.setItem("score", score)
  
  console.log(savedScore)  

}
