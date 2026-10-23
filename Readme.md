# WebDev Quiz App

A simple and interactive web development quiz application built using HTML, CSS, and JavaScript. It helps users test their basic knowledge of web development through multiple-choice questions.

## About the Project

The WebDev Quiz App allows users to enter their personal details, answer questions about HTML, CSS, and JavaScript, and view their final score after completing the quiz.

The application features a clean interface, a colorful progress bar, interactive answer options, and a results page with answer review.

## Features

* **User Registration:** Enter your name, age, and email before starting the quiz.
* **15 Multiple-Choice Questions:** Test your knowledge of HTML, CSS, and JavaScript.
* **Four Answer Options:** Each question contains options A, B, C, and D.
* **Question Navigation:** Move between questions using Previous and Next buttons.
* **Progress Indicator:** Track your progress with a gradient progress bar.
* **Instant Results:** View your total score, correct answers, incorrect answers, and percentage.
* **Answer Review:** Review all questions alongside your selected and correct answers.
* **Try Again:** Restart the quiz and attempt all questions again.
* **Responsive Design:** Works on desktops, laptops, tablets, and mobile devices.

## Technologies Used

* **HTML5** — Structures the application and its content.
* **CSS3** — Handles styling, layout, gradients, and responsive design.
* **JavaScript** — Manages quiz questions, user interactions, navigation, and score calculation.
* **Font Awesome** — Provides icons for the interface.

## Project Structure

```text
webdev-quiz-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/webdev-quiz-app.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Open the Project

Navigate to the project folder:

```bash
cd webdev-quiz-app
```

### 3. Run the Application

Open `index.html` directly in your browser.

Alternatively, open the project in Visual Studio Code and use the Live Server extension.

No backend, database, or package installation is required.

## How to Use

1. Open the application.
2. Click the **Start Quiz** button.
3. Enter your name, age, and email address.
4. Click **Begin Quiz**.
5. Answer the 15 multiple-choice questions.
6. Use the Previous and Next buttons to navigate.
7. Submit the quiz to calculate your score.
8. View your results and review the correct answers.
9. Select Try Again to restart the quiz.

## Scoring System

Each correct answer earns one point.

* Total Questions: 15
* Maximum Score: 15
* Incorrect or unanswered questions receive zero points.

The final percentage is calculated using:

```text
Percentage = (Correct Answers / Total Questions) × 100
```

## Important Notes

* This is a frontend-only project.
* User details and quiz results are not saved to a database.
* The application does not send personal information to a server.
* Font Awesome icons and Google Fonts, if included, require an internet connection to load.
* The correct answers are stored in the JavaScript source code, so this project is intended for learning and practice rather than secure examinations.

## Future Improvements

* Add a countdown timer.
* Randomize the question order.
* Store quiz results using local storage.
* Add more questions and difficulty levels.
* Introduce a leaderboard.
* Add a dark mode.

## Author

Developed as a web development practice project using HTML, CSS, and JavaScript.By Muhammad Rayan Asif
## Live Now 
("https://smart-webquiz.netlify.app/")

## License

This project is available for educational and personal learning purposes.
