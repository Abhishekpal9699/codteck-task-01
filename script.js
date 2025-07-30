    const questions = [
    {
        question: "What is the capital of France?",
        answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which language runs in a web browser?",
        answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
        ]
    },
    {
        question: "Who is the founder of Microsoft?",
        answers: [
        { text: "Steve Jobs", correct: false },
        { text: "Bill Gates", correct: true },
        { text: "Elon Musk", correct: false },
        { text: "Mark Zuckerberg", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
        { text: "HyperText Markup Language", correct: true },
        { text: "Hyper Tool Modern Language", correct: false },
        { text: "Home Text Made Language", correct: false },
        { text: "Hyperlink and Text Markup Language", correct: false }
        ]
    }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    }

    function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
        button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    }

    function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
    }

    function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
        button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
    }

    function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    }

    function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
    }

    nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
    });

    startQuiz();
    
    
    