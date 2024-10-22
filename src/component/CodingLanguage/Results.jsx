import React from 'react';
import './Results.css'; 
const Results = ({ score }) => {
    return (
        <div className="results-container">
            <h2 className="results-score">Your Score: {score}</h2>
        </div>
    );
};

export default Results;
