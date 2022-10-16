var timeEl = document.querySelector("#timer");
var startBTN = document.querySelector("#start");
var secondsLeft;
var timerInterval;
var stopTimer = false;
var a0 ;
var a1 ;
var a2 ;
var a3 ;
var questionCounter = 0;
var score = 0;
var p1 = document.createElement("p");
var ul = document.createElement("ul");
var main = document.querySelector("#main");

// sets up local storage to display blank information 
localStorage.setItem("highScoreName", "No Contest");
localStorage.setItem("highScore", "0");
localStorage.setItem("highScoreTime", "0");
// sets up html document with the previously created elements
main.appendChild(p1);
main.appendChild(ul);

// sets objects for each question in the quiz
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
var questionArray = [question0,question1,question2,question3];


// Adds function that starts a 30 second timer when the start quiz button is clicked. 
function timer(){
  clearInterval(timerInterval);
  secondsLeft = 30;
  timerInterval = setInterval(function() {
      if(stopTimer == false){
      if(secondsLeft >= 0) {
        console.log(secondsLeft);
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";      
      } else {
              // Stops execution of action at set interval
              clearInterval(timerInterval);
              a0.remove();
              a1.remove();
              a2.remove();
              a3.remove();
              p1.innerHTML = "Times Up <br> Your Score: " + score + "<br> Time Remaining: " + secondsLeft;
              timeEl.textContent = "Time's Up!!!";
              // Calls function to create and append image
      }
    } else {clearInterval(timerInterval)}
    }, 1000);
}

// Set up question on button click and clear the start quiz button.
function addQuestion(){
  // // sets up the html element to accept the questions and answers
  // creates a for loop to add 4 buttons and give them unique ID's and append them into the ul.
  for(var i = 0; i <4; i++){
    var li = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.id = "Btn"+i;
    ul.appendChild(li);
    li.appendChild(answerBtn);
  }
  // sets variables for the 4 buttons
  a0 = document.querySelector("#Btn0");
  a1 = document.querySelector("#Btn1");
  a2 = document.querySelector("#Btn2");
  a3 = document.querySelector("#Btn3");
  newQuestion();
  listen();
}

// creates even listners that only run after the buttons have been created. Also generates a variable that allows calcScore to work.
const listen = () => {
a0.addEventListener("click", function(event){
 var boolean = (a0.getAttribute("answer") == "true")?true:false;
 calcScore(boolean);
 newQuestion();
})
a1.addEventListener("click", function(event){
  var boolean = (a1.getAttribute("answer") == "true")?true:false;
  calcScore(boolean);
  newQuestion();
})
a2.addEventListener("click", function(event){
  var boolean = (a2.getAttribute("answer") == "true")?true:false;
  calcScore(boolean);
  newQuestion();
})
a3.addEventListener("click", function(event){
  var boolean = (a3.getAttribute("answer") == "true")?true:false;
  calcScore(boolean);
  newQuestion();
})
}
// sets the text content and attributes of the question and answers based on the value of questionCounter
const newQuestion = () => {
  if(questionCounter <4){
    p1.textContent = questionArray[questionCounter].question;
    a0.textContent = questionArray[questionCounter].answer0[0];
    a0.setAttribute("answer", questionArray[questionCounter].answer0[1]);
    a1.textContent = questionArray[questionCounter].answer1[0];
    a1.setAttribute("answer", questionArray[questionCounter].answer1[1]);
    a2.textContent = questionArray[questionCounter].answer2[0];
    a2.setAttribute("answer", questionArray[questionCounter].answer2[1]);
    a3.textContent = questionArray[questionCounter].answer3[0];
    a3.setAttribute("answer", questionArray[questionCounter].answer3[1]);
    questionCounter++;
  } else {
    // stops quiz after all four questions have been answered.
    displayScore();
  }
}

// calculates the score by reading the attribute "answer" and changing the score appropriately.
function calcScore(boolean){
  if(boolean == true){
    score++;
  } else {
    secondsLeft = secondsLeft- 5;
  }
 console.log(score);
}

// removes button elements and changes the text content of P1 to display the score 
const displayScore = () => {
  stopTimer = true;
  a0.remove();
  a1.remove();
  a2.remove();
  a3.remove();
  p1.innerHTML = "Your Score: " + score + "<br> Time Remaining: " + secondsLeft;
  var highScoreForm = document.createElement("form");
  var hsText = document.createElement("h2");
  var hsTextInput = document.createElement("input");
  var hsSubmit = document.createElement("input");
  hsSubmit.setAttribute("type", "submit");
  hsTextInput.setAttribute("type", "text");
  p1.appendChild(highScoreForm);
  highScoreForm.appendChild(hsText);
  highScoreForm.appendChild(hsTextInput);
  highScoreForm.appendChild(hsSubmit);
  hsText.textContent = "Please enter your initials to save your score."
  hsSubmit.addEventListener("click", function(){
    debugger;
    var hsName = hsTextInput.value;
    localStorage.setItem("highScoreName", hsName);
    localStorage.setItem("highScore", score);
    localStorage.setItem("highScoreTime", secondsLeft);
  })
}


//calls functions when start button is clicked
startBTN.addEventListener("click", function(event){
 event.preventDefault();
 startBTN.remove();
 addQuestion();
 timer();
});

var viewHighScore = document.querySelector("#highScores");
viewHighScore.addEventListener("click", function(){
  var lshsName = localStorage.getItem("highScoreName");
  var lshs = localStorage.getItem("highScore");
  var lshsTime = localStorage.getItem("highScoreTime");
  p1.innerHTML = "High Score:<br>" + lshsName + "<br>" + lshs + "<br>" +lshsTime;
})


