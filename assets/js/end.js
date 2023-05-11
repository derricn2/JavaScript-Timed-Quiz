
// saving score function, allows to click Save button when box is typed in and uses local storage for scorekeeping
var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');

var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save");
    e.preventDefault();

    // score object that refers to most recent score
    var score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);

    // organizes scores from highest to lowest
    highScores.sort( (a,b) => b.score - a.score);

    // keeps top 5 scores
    highScores.splice(5);

    // after inputting score, brings you back to homepage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');

    console.log(highScores);
};