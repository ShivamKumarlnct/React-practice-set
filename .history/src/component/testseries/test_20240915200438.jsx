import React, { useState } from 'react';
import Tests from './TestSeries';
import Result from './Result';

const test = () => {
  const [score, setScore] = useState(null);

  const handleScore = (finalScore) => {
    setScore(finalScore);
  };

  return (
    <div className="test">
      <h1>Test Series</h1>
      {score === null ? (
        <Tests setScore={handleScore} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default test;
