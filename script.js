
const questions = [
    // HTML: Questions 1–5
    {
        category: "HTML",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Machine Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        category: "HTML",
        question: "Which HTML tag creates a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: 1
    },
    {
        category: "HTML",
        question: "Which HTML element represents the largest heading?",
        options: [
            "<h6>",
            "<head>",
            "<h1>",
            "<heading>"
        ],
        answer: 2
    },
    {
        category: "HTML",
        question: "Which HTML tag is used to display an image?",
        options: [
            "<picture>",
            "<image>",
            "<src>",
            "<img>"
        ],
        answer: 3
    },
    {
        category: "HTML",
        question: "Which HTML element creates an ordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<li>",
            "<list>"
        ],
        answer: 0
    },

    // CSS: Questions 6–10
    {
        category: "CSS",
        question: "Which CSS property changes the text color?",
        options: [
            "background-color",
            "font-style",
            "color",
            "text-decoration"
        ],
        answer: 2
    },
    {
        category: "CSS",
        question: "Which CSS property changes an element's background color?",
        options: [
            "color",
            "background-color",
            "background-image",
            "opacity"
        ],
        answer: 1
    },
    {
        category: "CSS",
        question: "Which CSS property makes text bold?",
        options: [
            "font-size",
            "text-align",
            "font-family",
            "font-weight"
        ],
        answer: 3
    },
    {
        category: "CSS",
        question: "Which CSS property adds space inside an element's border?",
        options: [
            "padding",
            "margin",
            "outline",
            "gap"
        ],
        answer: 0
    },
    {
        category: "CSS",
        question: "Which CSS declaration centers text horizontally?",
        options: [
            "vertical-align: middle;",
            "justify-content: center;",
            "text-align: center;",
            "align-items: center;"
        ],
        answer: 2
    },

    // JavaScript: Questions 11–15
    {
        category: "JavaScript",
        question: "Which symbol starts a single-line comment in JavaScript?",
        options: [
            "<!--",
            "//",
            "**",
            "##"
        ],
        answer: 1
    },
    {
        category: "JavaScript",
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: [
            "const",
            "static",
            "define",
            "let"
        ],
        answer: 3
    },
    {
        category: "JavaScript",
        question: "Which function displays a browser alert dialog?",
        options: [
            "alert()",
            "console.log()",
            "document.write()",
            "promptText()"
        ],
        answer: 0
    },
    {
        category: "JavaScript",
        question: "Which operator checks equality of both value and type?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: 2
    },
    {
        category: "JavaScript",
        question: "Which method adds an element to the end of a JavaScript array?",
        options: [
            "shift()",
            "push()",
            "pop()",
            "unshift()"
        ],
        answer: 1
    }
];


// ========================================
// DOM ELEMENTS
// ========================================

const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("start-btn");
const registrationForm = document.getElementById("registration-form");
const backToHomeBtn = document.getElementById("back-to-home");

const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");

const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const scoreDisplay = document.getElementById("score-display");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const percentageDisplay = document.getElementById("percentage-display");

const resultGreeting = document.getElementById("result-greeting");
const resultMessage = document.getElementById("result-message");

const reviewContainer = document.getElementById("review-container");


// ========================================
// QUIZ STATE
// ========================================

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

let user = {
    name: "",
    age: 0,
    email: ""
};


// ========================================
// SCREEN NAVIGATION
// ========================================

function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// START AND REGISTRATION
// ========================================

startBtn.addEventListener("click", () => {
    showScreen("registration-screen");
});

backToHomeBtn.addEventListener("click", () => {
    showScreen("welcome-screen");
});

registrationForm.addEventListener("submit", event => {
    event.preventDefault();

    user.name = usernameInput.value.trim();
    user.age = Number(ageInput.value);
    user.email = emailInput.value.trim();

    if (
        user.name.length < 2 ||
        user.name.length > 60 ||
        !Number.isInteger(user.age) ||
        user.age < 5 ||
        user.age > 120 ||
        !registrationForm.checkValidity()
    ) {
        registrationForm.reportValidity();
        return;
    }

    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);

    showScreen("quiz-screen");
    displayQuestion();
});


// ========================================
// DISPLAY QUESTION
// ========================================

function displayQuestion() {
    const question = questions[currentQuestion];

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionCategory.textContent = question.category;
    questionText.textContent = question.question;

    const progress = (currentQuestion / questions.length) * 100;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% Completed`;

    optionsContainer.replaceChildren();

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option";

        if (userAnswers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const label = document.createElement("span");
        label.textContent = option;

        button.append(letter, label);

        button.addEventListener("click", () => {
            userAnswers[currentQuestion] = index;
            displayQuestion();
        });

        optionsContainer.appendChild(button);
    });

    previousBtn.disabled = currentQuestion === 0;
    previousBtn.style.opacity =
        currentQuestion === 0 ? "0.5" : "1";

    nextBtn.classList.toggle(
        "hidden",
        currentQuestion === questions.length - 1
    );

    submitBtn.classList.toggle(
        "hidden",
        currentQuestion !== questions.length - 1
    );
}


// ========================================
// QUESTION NAVIGATION
// ========================================

previousBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    }
});


// ========================================
// SUBMIT QUIZ
// ========================================

submitBtn.addEventListener("click", () => {
    const unanswered = userAnswers.filter(
        answer => answer === null
    ).length;

    if (unanswered > 0) {
        const continueQuiz = confirm(
            `You have ${unanswered} unanswered question(s). ` +
            "Submit the quiz anyway?"
        );

        if (!continueQuiz) {
            const firstUnanswered = userAnswers.findIndex(
                answer => answer === null
            );

            currentQuestion = firstUnanswered;
            displayQuestion();
            return;
        }
    }

    calculateResults();
});


// ========================================
// CALCULATE SCORE
// ========================================

function calculateResults() {
    let score = 0;

    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    const total = questions.length;
    const incorrect = total - score;
    const percentage = Math.round((score / total) * 100);

    scoreDisplay.textContent = `${score} / ${total}`;
    correctCount.textContent = score;
    incorrectCount.textContent = incorrect;
    percentageDisplay.textContent = `${percentage}%`;

    resultGreeting.textContent = `Great job, ${user.name}!`;

    if (percentage >= 80) {
        resultMessage.textContent =
            "Excellent work! You have a strong understanding of web development. 🎉";
    } else if (percentage >= 50) {
        resultMessage.textContent =
            "Good effort! Keep practicing to improve your score. 💪";
    } else {
        resultMessage.textContent =
            "Keep learning! Review your answers and try again. 📚";
    }

    progressBar.style.width = "100%";
    progressText.textContent = "100% Completed";

    showScreen("results-screen");
}


// ========================================
// REVIEW ANSWERS
// ========================================

document.getElementById("review-btn").addEventListener("click", () => {
    reviewContainer.replaceChildren();

    questions.forEach((question, index) => {
        const selectedAnswer = userAnswers[index];
        const isCorrect = selectedAnswer === question.answer;

        const card = document.createElement("div");

        card.className = "review-item " +
            (isCorrect ? "review-correct" : "review-incorrect");

        const heading = document.createElement("h3");
        heading.textContent =
            `${index + 1}. ${question.question}`;

        const yourAnswer = document.createElement("p");

        yourAnswer.className = isCorrect
            ? "correct-answer"
            : "wrong-answer";

        yourAnswer.textContent =
            "Your answer: " +
            (
                selectedAnswer === null
                    ? "Not answered"
                    : `${String.fromCharCode(65 + selectedAnswer)}. ` +
                      question.options[selectedAnswer]
            );

        const correctAnswer = document.createElement("p");
        correctAnswer.className = "correct-answer";

        correctAnswer.textContent =
            `Correct answer: ${String.fromCharCode(65 + question.answer)}. ` +
            question.options[question.answer];

        const category = document.createElement("p");
        category.textContent = `Subject: ${question.category}`;

        card.append(
            heading,
            yourAnswer,
            correctAnswer,
            category
        );

        reviewContainer.appendChild(card);
    });

    showScreen("review-screen");
});


// ========================================
// RESTART QUIZ
// ========================================

document.getElementById("retry-btn").addEventListener("click", () => {
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);

    showScreen("quiz-screen");
    displayQuestion();
});


// ========================================
// RETURN HOME
// ========================================

document.getElementById("home-btn").addEventListener("click", () => {
    registrationForm.reset();

    user = {
        name: "",
        age: 0,
        email: ""
    };

    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);

    showScreen("welcome-screen");
});

document.getElementById("review-home-btn").addEventListener("click", () => {
    showScreen("results-screen");
});
