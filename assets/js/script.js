// pulling questions and choices from html
var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName('choice-text'));

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parentheses",
        choice4: "square brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store_____.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal / bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    },
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<javascript>",
        choice2: "<script>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 2
    },
];

// value of getting question correct
const CORRECT_BONUS = 5;
// amount of total questions
const MAX_QUESTIONS = 6;

// start quiz 
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

// pulls different question from var questions array
getNewQuestion = () => {

        // once all questions are answered, end webpage will be loaded
        if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
            return window.location.assign("./end.html");
        }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // brings the appropriate answer choices that go along with the appropriate question, prevents different answer choices to mix with other questions
    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    // prevents asking repeat questions
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

// after choice is clicked, a new question is loaded
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false; 
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];



        // console logs/registers correct or incorrect answer
        var classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer){
            classToApply = 'correct';
        }

        selectedChoice.parentElement.classList.add(classToApply);
        // timer showing correct/incrroect answer
        setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);
    });
});

startGame();