var timeEl = document.querySelector("#timer");
var startBTN = document.querySelector("#start");
var secondsLeft;
var timerInterval;

var question0 = {
  question: "Inside which HTML element do we put the JavaScript?",
  answer0: ["<scripting>", false],
  answer1: ["<javascript>", false],
  answer2: ["<js>", false],
  answer3: ["<script>", true]
};
var question1 = {
  question: "How will you declare a variable in JavaScript that stores the string 'Tom'?",
  answer0: ["var Tom;", false],
  answer1: ["'Tom';", false],
  answer2: ["var name = 'Tom';", true],
  answer3: ["var name = Tom;", false]
};
var question2 = {
  question: "Which of the below is a valid variable name declaration in JavaScript?",
  answer0: ["var camelCase = 'Its got the look!';", true],
  answer1: ["var USA! = 'United States Of America';", false],
  answer2: ["var this Is A Good Variable = 'Yes';", false],
  answer3: ["var 1Step = 1;", false]
};
var question3 = {
  question: "How will you change the contents of the name variable to 'Jerry' in JavaScript?var name = 'Tom';",
  answer0: ["var name = 'Jerry';", false],
  answer1: ["name = Jerry;", false],
  answer2: ["name = 'Jerry';", true],
  answer3: ["var Jerry = name;", false]
};

var questionArray = [question]

// Adds function that starts a 30 second timer when the start quiz button is clicked. 
function timer(){
  clearInterval(timerInterval);
   secondsLeft = 30;
  console.log(secondsLeft);
  timerInterval = setInterval(function() {
    if(secondsLeft >= 0) {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";      
    } else {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.textContent = "Time's Up!!!";
            // Calls function to create and append image
    }
  }, 1000);
}

// Set up question on button click and clear the start quiz button.
function addQuestion(){
  // // sets up the html element to accept the questions and answers
  var p1 = document.createElement("p");
  var ul = document.createElement("ul");
  var main = document.querySelector("#main");
  p1.textContent = question.question;
  main.appendChild(p1);
  main.appendChild(ul);
  // creates a for loop to add 4 buttons and give them unique ID's and append them into the ul.
  for(var i = 0; i <4; i++){
    var li = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.id = "Btn"+i;
    ul.appendChild(li);
    li.appendChild(answerBtn);
  }
  // creates variables for the 4 buttons
  var a0 = document.querySelector("#Btn0");
  var a1 = document.querySelector("#Btn1");
  var a2 = document.querySelector("#Btn2");
  var a3 = document.querySelector("#Btn3");
// calls content to the generated buttons from the object question
 a0.textContent = question.answer0[0];
 a1.textContent = question.answer1[0];
 a2.textContent = question.answer2[0];
 a3.textContent = question.answer3[0];

}

//calls functions when start button is clicked
startBTN.addEventListener("click", function(event){
 event.preventDefault();
 startBTN.remove();
 addQuestion();
 timer();
});

// clear the previous question after being answered and populate the next question, subtract time when questions is answered wrong

