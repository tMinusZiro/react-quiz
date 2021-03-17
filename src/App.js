import "./index.css";
import { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of vermont",
      answerOptions: [
        {
          answerText: "Milton",
          isCorrect: false,
        },
        {
          answerText: "Montpellier",
          isCorrect: false,
        },
        {
          answerText: "Springfield",
          isCorrect: true,
        },
        {
          answerText: "Burlington",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Who is Darth Vader?",
      answerOptions: [
        {
          answerText: "Frank Oz",
          isCorrect: false,
        },
        {
          answerText: "Pedro Martinez",
          isCorrect: false,
        },
        {
          answerText: "Anakin Skywalker",
          isCorrect: true,
        },
        {
          answerText: "Luke Skywalker",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Which Vehicle brand uses the 6 star constellation as its logo",
      answerOptions: [
        {
          answerText: "Subaru",
          isCorrect: false,
        },
        {
          answerText: "Honda",
          isCorrect: false,
        },
        {
          answerText: "Audi",
          isCorrect: true,
        },
        {
          answerText: "Toyota",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "What is the Vermont state animal?",
      answerOptions: [
        {
          answerText: "Linx",
          isCorrect: false,
        },
        {
          answerText: "Catamount",
          isCorrect: false,
        },
        {
          answerText: "Whipperwill",
          isCorrect: true,
        },
        {
          answerText: "White Tail Deer",
          isCorrect: false,
        },
      ],
    },
  ];
  //Tracks current question
  const [currentQ, setCurrentQ] = useState(0);
  //Tracks if we are displaying the score end screen or not
  const [showScore, setShowScore] = useState(false);
  //Tracks score / points
  const [score, setScore] = useState(0);

  //Handles answer button clicks
  function handleAnswerButton(isCorrect) {
    if (isCorrect === true) {
      alert("you guessed right!");
    }
    let nextQ = currentQ + 1;
    setCurrentQ(nextQ);
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  }

  //Handles Reset button click
  function handleResetButton(isCorrect) {
    setCurrentQ(0);
    setShowScore(false);
    setScore(0);
  }

  return (
    <div>
      {/*Ternary to render either score screen, or quiz screeen */}
      {showScore ? (
        <>
          <div className="score-section">
            You score 1 out {questions.length}
          </div>
          <button onClick={handleResetButton}>Reset</button>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQ + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQ].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQ].answerOptions.map((answer) => (
              <button
                onClick={() => {
                  handleAnswerButton(answer.isCorrect);
                }}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
