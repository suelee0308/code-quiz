// variable of parsed object
var userHighScore = JSON.parse(localStorage.getItem("key"));
console.log(userHighScore);
console.log(typeof userHighScore);

// variable for info from the parse
var userHighScoreInitials = userHighScore.userInitials;
var userHighScoreScore = userHighScore.userScore;
console.log(userHighScoreInitials);

// variable for text in html
var userHighScore = document.getElementById("individualScores");

// function to display on high score
userHighScore.textContent = "User: " + userHighScoreInitials + " --- " + " Score: " + userHighScoreScore;
