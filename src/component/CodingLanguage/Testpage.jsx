import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import Test from './Test'; 
import Results from './Results'; 
import Questions from './Questions';
import './testpage.css';

const TestPage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [score, setScore] = useState(null);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setScore(null); 
    };

    const handleScore = (finalScore) => {
        setScore(finalScore);
    };

    return (
        <div className="test-page-container">
            <h1 className="test-page-header">Test Series</h1>
            {score === null ? (
                selectedLanguage === '' ? (
                    <LanguageSelector 
                        selectedLanguage={selectedLanguage} 
                        onLanguageChange={handleLanguageChange} 
                    />
                ) : (
                    <Test 
                        questions={Questions[selectedLanguage]} 
                        setScore={handleScore} 
                    />
                )
            ) : (
                <Results score={score} />
            )}
        </div>
    );
};

export default TestPage;
