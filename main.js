var dataStructure = [
    {
      q: "What Year was I born",
      a: ["1989", "1986", "1998", "1980"], 
      correctAnswer: "1980"
    },
    {
      q: "What do you call the type of value that determines if something is true or false?",
      a: ["Boolean", "Variable","String", "Argument"], 
      correctAnswer: "Boolean"
    }
  ]

var questionDiv = document.querySelector("#question");
var newQuestion = document.createElement("h1");
newQuestion.textContent = dataStructure[0].q;
questionDiv.appendChild(newQuestion);

var answersDiv = document.querySelector("#answers");
var newAnswers = document.createElement("button");
newAnswers.textContent = dataStructure[0].a;
answersDiv.appendChild(newAnswers);

var test = document.createElement("h3")
test.textContent = dataStructure[0].a[0]
window.document.body.appendChild(test)


