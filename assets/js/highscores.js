// reference to highscores list
var highScoresList = document.getElementById('highScoresList');
// pulling highscore list from local storage
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// displays names w/ scores
highScoresList.innerHTML = highScores
    .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join('');
