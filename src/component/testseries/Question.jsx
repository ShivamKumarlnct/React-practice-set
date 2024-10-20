import React from 'react';

const Question = ({ question, onAnswerChange, selectedAnswer }) => {
  return (
    <div>
      <h3>{question.questionText}</h3>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={question.id}
            value={option}
            checked={selectedAnswer === option}
            onChange={(e) => onAnswerChange(question.id, e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
