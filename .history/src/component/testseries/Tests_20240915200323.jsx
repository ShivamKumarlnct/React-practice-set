import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    questionText: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Tolstoy", "Hemingway", "Orwell"],
    answer: "Shakespeare",
  },
  {
    id: 3,
    questionText: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "N2"],
    answer: "H2O",
  },
  {
    id: 4,
    questionText: "What planet is closest to the sun?",
    options: ["Earth", "Mars", "Mercury", "Venus"],
    answer: "Mercury",
  },
];

const TestSeries = ({ setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        score += 1;
      }
    });
    setScore(score);
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <h2>Test Submitted!</h2>
      ) : (
        <>
          <Question
            key={questions[currentQuestionIndex].id}
            question={questions[currentQuestionIndex]}
            onAnswerChange={handleAnswerChange}
            selectedAnswer={selectedAnswers[questions[currentQuestionIndex].id]}
          />
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
              Next
            </button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </>
      )}
    </div>
  );
};

export default TestSeries;
