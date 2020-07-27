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
    }
  ]




// Query Selectors grabbing divs and creating elements
var questionDiv = document.querySelector("#question");
var question = document.createElement("h1");

var a0Div = document.querySelector("#a0");
var newA0 = document.createElement("button");

var a1Div = document.querySelector("#a1");
var newA1 = document.createElement("button");

var a2Div = document.querySelector("#a2");
var newA2 = document.createElement("button");

var a3Div = document.querySelector("#a3");
var newA3 = document.createElement("button");

// Start Screen
question.textContent = "Welcome to the Coding Quiz";
questionDiv.appendChild(question);

newA1.textContent = "Start";
a1Div.appendChild(newA1)

//    Function to make questions appear
function newQuestion () {
      
  for (var i = 0; i < dataStructure.length; i++) {
    
    question.textContent = dataStructure[i].q;
    questionDiv.appendChild(question);

    newA0.textContent = dataStructure[i].a[0];
    a0Div.appendChild(newA0);
   
    newA1.textContent = dataStructure[i].a[1];
    a1Div.appendChild(newA1);
   
    newA2.textContent = dataStructure[i].a[2];
    a2Div.appendChild(newA2);
  
    newA3.textContent = dataStructure[i].a[3];
    a3Div.appendChild(newA3);
    }
}

// Timer
var timer = document.querySelector("#time");
var secondsLeft = 60;
timer.setAttribute("class", "float-right")


function countDown () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        newQuestion

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }

    }, 1000);
}

function gameOver() {
    question.textContent = "Game Over";
    a0Div.removeChild(newA0)
    questionDiv.appendChild(question);
}

// On Click Event to Start Game
a0Div.addEventListener("click", countDown)
    
    



