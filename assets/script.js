var timeEl = document.querySelector("#timer");
var startBTN = document.querySelector("#start");
var secondsLeft;
var timerInterval;

var question = {
  question: "Inside which HTML element do we put the JavaScript?",
  answer0: ["<scripting>", false],
  answer1: ["<javascript>", false],
  answer2: ["<js>", false],
  answer3: ["<script>", true]
};

// Adds function that starts a 30 second timer when the start quiz button is clicked. 
// NOTE: Tried to seperate the function to be able to call it seperately but continued to have issues of the function being called before the button was clicked. 
startBTN.addEventListener("click", function(){
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
});

// Set up question on button click and clear the start quiz button.
startBTN.addEventListener("click", function(event){
  event.preventDefault();
  var p1 = document.createElement("p");
  var ul = document.createElement("ul");
  var main = document.querySelector("#main");
  p1.textContent = question.question;
  main.appendChild(p1);
  main.appendChild(ul);
  for(var i = 0; i <4; i++){
    var li = document.createElement("li");
    var answerBtn = document.createElement("button");
    answerBtn.id = "Btn"+i;
    ul.appendChild(li);
    li.appendChild(answerBtn);
  }
  var a0 = document.querySelector("#Btn0");
  var a1 = document.querySelector("#Btn1");
  var a2 = document.querySelector("#Btn2");
  var a3 = document.querySelector("#Btn3");

 a0.textContent = question.answer0[0];
 a1.textContent = question.answer1[0];
 a2.textContent = question.answer2[0];
 a3.textContent = question.answer3[0];

})

// clear the previous question after being answered and populate the next question, subtract time when questions is answered wrong

