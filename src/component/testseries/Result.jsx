import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Your Score: {score}</h2>
      <p>{score > 25 ? "Well done!" : "Try again!"}</p>
    </div>
  );
};

export default Result;
