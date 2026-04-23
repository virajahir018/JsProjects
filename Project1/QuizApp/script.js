const quizData = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database", "Server"],
    correct: 1
  },
  {
    question: "What is CSS used for?",
    answers: ["Logic", "Design", "Database", "API"],
    correct: 1
  },
  {
    question: "What is JavaScript?",
    answers: ["Styling", "Markup", "Programming Language", "Hosting"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");

function loadQuestion() {
  let q = quizData[currentQuestion];
  questionEl.innerText = q.question;

  answerBtns.forEach((btn, index) => {
    btn.innerText = q.answers[index];
  });
}

function checkAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
    alert("Correct ✅");
  } else {
    alert("Wrong ❌");
  }
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>Your Score: ${score}/${quizData.length}</h2>`;
  }
}

loadQuestion();