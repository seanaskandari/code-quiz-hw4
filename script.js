const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const btn1 = document.getElementById("Q1")
const btn2 = document.getElementById("Q2")
const btn3 = document.getElementById("Q3")
const btn4 = document.getElementById("Q4")
const correctAnswer = document.getElementById("Correct")
const nextButton = document.getElementById("next-btn")
const saveDiv = document.getElementById("saveDiv")
const userInitials = document.getElementById("userInitials")
const saveUserInitialsButton = document.getElementById("saveUserInitialsButton")
const yourScore = document.getElementById("yourScore")

saveDiv.style.display = "none"

let currentQuestion = 0
let userScore = 0

let questions = [
    {
        question: "What is considered 'The Bones' of coding?",
        answers: ["HTML", "CSS", "JavaScript", "JQuery"],
        answer: 0

    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["for loops", "console.log", "JavaScript", "terminal/bash"],
        answer: 1
    },

    {
        question: "Arrays in Javascript can be used to store _____?",
        answers: ["Booleans", "Other Arrays", "Numbers and Strings", "All of the Above"],
        answer: 3
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables?",
        answers: ["Parentheses", "Commas", "Curly Brackets", "Quotes"],
        answer: 3
    },

    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "numbers", "alerts", "booleans"],
        answer: 2
    },
]

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", nextQuestion)
saveUserInitialsButton.addEventListener("click", saveUser)

btn1.addEventListener("click", selectAnswer)
btn2.addEventListener("click", selectAnswer)
btn3.addEventListener("click", selectAnswer)
btn4.addEventListener("click", selectAnswer)

function startGame() {
    startButton.style.display = "none"
    nextQuestion()
}

function nextQuestion() {
    if (currentQuestion == questions.length - 1) {
        alert("Your Score Is " + userScore)
        btn1.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display = "none"
        questionElement.innerText = "Your Score Is " + userScore
        nextButton.style.display = "none"
        saveDiv.style.display = "block"
        correctAnswer.innerText = ""
    }
    else {
        questionElement.innerText = questions[currentQuestion].question
        btn1.innerText = questions[currentQuestion].answers[0]
        btn2.innerText = questions[currentQuestion].answers[1]
        btn3.innerText = questions[currentQuestion].answers[2]
        btn4.innerText = questions[currentQuestion].answers[3]
        correctAnswer.innerText = ""
    }
}
function selectAnswer() {
    var userChoice = this.getAttribute("data-value")
    console.group(userChoice)
    if (questions[currentQuestion].answer == userChoice) {
        userScore++
        correctAnswer.innerText = "Correct!"
    }
    else {
        correctAnswer.innerText = "Try Again!"
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++
    }
}

function saveUser() {
    var savedInitials = userInitials.value
    var previousScore = localStorage.getItem("userScore") || 0
    if (userScore > previousScore) {
        localStorage.setItem("userName", savedInitials)
        localStorage.setItem("userScore", userScore)
        displayLocalStorage()
    }

}

function displayLocalStorage() {
    var user = localStorage.getItem("userName") || "Good Luck!   "
    var score = localStorage.getItem("userScore") || "Score = 0"
    yourScore.innerText = user + score
}

displayLocalStorage()