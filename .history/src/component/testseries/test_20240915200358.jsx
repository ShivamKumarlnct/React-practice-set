import React, { useState } from 'react';
import TestSeries from './TestSeries';
import Result from './Result';

const  = () => {
  const [score, setScore] = useState(null);

  const handleScore = (finalScore) => {
    setScore(finalScore);
  };

  return (
    <div className="App">
      <h1>Test Series</h1>
      {score === null ? (
        <TestSeries setScore={handleScore} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default App;
