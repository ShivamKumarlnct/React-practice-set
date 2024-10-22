import React from 'react';
import './Qna.css';

const Question = ({ question, onAnswerChange, selectedAnswer }) => {
    return (
        <div className="question-container">
            <h3 className="question-text">{question.text}</h3>
            <div className="options-container">
                {question.options.map((option) => (
                    <div className="option-item" key={option}>
                        <label className="option-label">
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => onAnswerChange(question.id, option)}
                                className="option-input"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
