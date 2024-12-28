import React from 'react';
import './LanguageSelector.css';

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
    const languages = [
        'Html', 
        'css', 
        'javascript', 
        'python', 
        'java', 
        'Node', 
        'ruby', 
        'php', 
        'Express', 
        'Mongoose', 
        'typescript', 
        'go', 
        'RUST',  
        'react', 
        'dart', 
        'Cpp',  
        'sql', 
        'C', 
    ];

    return (
        <div className="language-selector">
            <h2 className="language-title">Select Language for Test Series</h2>
            <div className="language-cards-container">
                {languages.map((language) => (
                    <div
                        key={language}
                        onClick={() => onLanguageChange(language)}
                        className="language-card"
                    >
                        <h3>{language.toUpperCase()}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
