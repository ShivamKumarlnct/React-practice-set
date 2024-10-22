import React, { useState } from 'react';
import Question from './Qna'; 
import './test.css';

const Test = ({ questions, setScore }) => {
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

    if (questions.length === 0) {
        return <h2 className="no-questions">No questions available for this language.</h2>;
    }

    return (
        <div className="test-container">
            {isSubmitted ? (
                <h2 className="submitted-message">Test Submitted!</h2>
            ) : (
                <>
                    <Question
                        key={questions[currentQuestionIndex].id}
                        question={questions[currentQuestionIndex]}
                        onAnswerChange={handleAnswerChange}
                        selectedAnswer={selectedAnswers[questions[currentQuestionIndex].id]}
                    />
                    <div className="test-navigation">
                        {currentQuestionIndex < questions.length - 1 ? (
                            <button 
                                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} 
                                className="next-button"
                            >
                                Next
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className="submit-button">
                                Submit
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Test;
