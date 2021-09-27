// variables for our application 
var startBtn = document.querySelector(".startbutton")
var timerEl = document.getElementById("time");
var timerDiv = document.querySelector(".timer");
var timerId;
var timeLeft = 60;
var timerInterval;
var calledQuestions;
var flagImg = document.getElementById("photo");
var questionIndex = 0;
var startScreen = document.getElementById("startScreen");
var questionBox = document.getElementById("questions");
var questionText = document.getElementById("questionText")
var choices = document.getElementById("choices")
var imageEl = document.getElementById("flag");
var endScreen = document.getElementById("endScreen");
var score = 0;
var finalScore = document.getElementById("final-score");
var endMessage = document.getElementById("endMessage");


// Event listener to startbtn to begin function to start both the timer and start showing the questions
startBtn.addEventListener("click", startQuiz);

// function to set timer, hide classes, show questions and choices
function startQuiz() {
    // Sets timer interval in variable
   timerInterval = setInterval(clockTick, 1000);
    // hidestartscreen
    startScreen.setAttribute("class", "hide");
        // show the questions
        questionBox.removeAttribute("class");
        choices.removeAttribute("class")
        getQuestions();
}
 
// function for timer
function clockTick() {
        // if time left is greater than zero, textcontent shows time, time--, go to getQuestion function
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "";
            timeLeft --;
        }
        
        // else, textcontent shows time, clear interval, and go to end quiz function
        else {
            timerEl.textContent = "0";
            clearInterval(timerInterval);
            endQuiz();
        }
        return;
      }


// function to get questions
function getQuestions(){
    // global var calledQuestions is the index value of each question on the questions list
        calledQuestions = questions[questionIndex];
    // document's question text is each questions.title key
        questionText.textContent = calledQuestions.title;
    // forEach() loop through the questions answer choices
        calledQuestions.choices.forEach(function(choice) {
            var choicesBtn = document.createElement("button");
            choicesBtn.setAttribute('value', choice);
            choicesBtn.addEventListener("click", answerClick);
            choicesBtn.textContent = choice;
    
            choices.appendChild(choicesBtn);
            choicesBtn.className = "choicesbuttons";
       });
    //    change back background color if questions was previously wrong
       timerDiv.setAttribute("class", "timer");
    }
    
    // function to compare the answer, store score if true, dock seconds if not, ++ to next question index
    function answerClick(x) {
        // if target value clikced is the same as the question's answer, score +
        if((x.target.value) === calledQuestions.answer) {
            console.log("correct")
            score = score + 20;
        }
        // else wrong, dock 5sec, change timer color to red to indicate wrong answer
        else {
            console.log("wrong")
            timeLeft = timeLeft -5;
            timerDiv.style.backgroundColor = 'red';
            }
        // move through index of questions
        questionIndex ++;
    
        // once you reach the end of the quiz, call endQuiz function
        if (questionIndex === questions.length){
        endQuiz();
        } else {
            // continue to move through the questions, call back getQuestions function
            // get rid of previous answer choices
            choices.innerHTML = "";
            getQuestions();
        }
    }

// function to endQuiz, hide questions div, show endScreen div
    function endQuiz(){
        // hide questions, show endScreen
        questionBox.setAttribute("class", "hide");
        choices.setAttribute("class", "hide");
        endScreen.removeAttribute("class");
        //show final score in DOM 
        finalScore.textContent = score;
        // change final message
        if (score >= 60) {
            endMessage.textContent = "Well Done!"
        } else {
            endMessage.textContent = "Good Try..."
        }
    }