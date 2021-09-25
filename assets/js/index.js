// variables for our application 
var questionEl = document.getElementById("questions")
var timer = questions.length *15;
var timerEl = document.getElementById("time");
var timerId;

// a function to start quiz & hide start screen
function beginQuiz() {
// hide start screen
var startScreenHide = document.getElementById("startScreen");
startScreenHide.setAttribute("class", "hide")
// unhide questions screen
questionEl.removeAttribute("class");
// start timer
timerId = setInterval(clockTick, 1000);
// show the starting time for the quiz
timerEl.textContent = time;
// access the get qustion function in order to loop through the questions
getQuestion();
}

// need a function to getQuestions
function getQuestion(){
    // at some point you need to loop through the questions 
        // forEach() or a for loop 

}

function endQuiz(){

}




// Add event listener “click” run function startGame;

// Function startGame ( )
// Welcome screen and startGame button needs to go away
// document.getElementByid.("welcome")

// timer starts
// Selects element by class
var timeEl = document.querySelector(".time");

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

//   First question needs to become visible from questions.js


// if element.match("answer"){
// add points to score
// else {}
}