var timeEl = document.querySelector("#timer");
var startBTN = document.querySelector("#start");
var secondsLeft;
var timerInterval;

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

