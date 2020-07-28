
// Using an object to store the questions and answers
var dataStructure = [
    {
      q: "What Year was I born?",
      a: ["1989", "1986", "1998", "1980"], 
      correctAnswer: "1980"
    },
    {
      q: "What do you call the type of value that determines if something is true or false?",
      a: ["Boolean", "Variable","String", "Argument"], 
      correctAnswer: "Boolean"
    },
    {
      q: "What punctuation is used to surround a string?",
      a: ["Parentheses", "Square Brackets", "Carrots", "Quotation Marks"],
      correctAnswer: "Quotation Marks"
    }
  ]

// Starting point for the questions
var questionIndex = dataStructure[0]

// Query Selectors grabbing divs and creating elements
var score = document.querySelector("#score");
var timer = document.querySelector("#time");
var questionDiv = document.querySelector("#question");
var a0Div = document.querySelector("#a0");
var a1Div = document.querySelector("#a1");
var a2Div = document.querySelector("#a2");
var a3Div = document.querySelector("#a3");
var startButton = document.querySelector("a4")


// Start Screen
questionDiv.textContent = "Welcome to the Coding Quiz";
 
// Scoreboard 

function scoreKeeper () {
  var scoreBoard = document.querySelector("#score")
  var score = 0
  scoreBoard = score
}

// Timer
var secondsLeft = 60;

// On Click Event to Start Game
startButton.addEventListener("click", startGame)

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
      newQuestion();
      if(secondsLeft === 0 || dataStructure.length === questionIndex) {
          clearInterval(timerInterval);
          gameOver();
      }
  }, 1000);
}

a0Div.addEventListener("click", checkAnswer);
a1Div.addEventListener("click", checkAnswer);
a2Div.addEventListener("click", checkAnswer);
a3Div.addEventListener("click", checkAnswer);

//    Function to make questions appear
function newQuestion () {
  questionDiv.textContent = questionIndex.q;
  a0Div.textContent = questionIndex.a[0];
  a1Div.textContent = questionIndex.a[1];
  a2Div.textContent = questionIndex.a[2];
  a3Div.textContent = questionIndex.a[3];
  }


 function checkAnswer () {

      console.log(clicked_id);
    //   var answer = newQuestion[questionIndex].correctAnswer;

    //   if (answer === {
    //     score++;
    //     questionIndex++;
    //     newQuestion();
    //   } else {
    //     secondsLeft = secondsLeft - 5;
    //     questionIndex++;
    //     newQuestion();
    //   }
    }

// Function for Game Over screen
function gameOver() {
    question.textContent = "Game Over";
}
