
// saving score function, allows to click Save button when box is typed in and uses local storage for scorekeeping
var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save");
    e.preventDefault();
};