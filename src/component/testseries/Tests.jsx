import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    questionText: "Which of the following is used to style a web page?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    id: 2,
    questionText: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    answer: "<ul>",
  },
  {
    id: 3,
    questionText: "Which CSS property is used to change the background color of an element?",
    options: ["background-color", "color", "border-color", "text-color"],
    answer: "background-color",
  },
  {
    id: 4,
    questionText: "In JavaScript, what method is used to select an element by its ID?",
    options: ["getElementById()", "querySelector()", "getElementByClass()", "getByID()"],
    answer: "getElementById()",
  },
  {
    id: 5,
    questionText: "What does CSS stand for?",
    options: ["Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    id: 6,
    questionText: "Which of the following is a JavaScript framework for building user interfaces?",
    options: ["React", "Laravel", "Flask", "Django"],
    answer: "React",
  },
  {
    id: 7,
    questionText: "What is the correct syntax for adding comments in HTML?",
    options: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "# This is a comment"],
    answer: "<!-- This is a comment -->",
  },
  {
    id: 8,
    questionText: "Which unit is NOT relative in CSS?",
    options: ["em", "rem", "px", "%"],
    answer: "px",
  },
  {
    id: 9,
    questionText: "Which JavaScript event is used to execute code when a user clicks on an element?",
    options: ["onmouseover", "onclick", "onhover", "onchange"],
    answer: "onclick",
  },
  {
    id: 10,
    questionText: "What is the purpose of the box-sizing property in CSS?",
    options: [
      "To control the size of an element's padding",
      "To include padding and border in the element's total width and height",
      "To add shadows to the element",
      "To align content inside the element"
    ],
    answer: "To include padding and border in the element's total width and height",
  },
  // SQL Questions
  {
    id: 11,
    questionText: "Which SQL statement is used to extract data from a database?",
    options: ["GET", "SELECT", "EXTRACT", "PULL"],
    answer: "SELECT",
  },
  {
    id: 12,
    questionText: "What does SQL stand for?",
    options: ["Structured Query Language", "Structured Question Language", "Simple Query Language", "Standard Query Language"],
    answer: "Structured Query Language",
  },
  {
    id: 13,
    questionText: "Which SQL keyword is used to sort the result set?",
    options: ["ORDER BY", "SORT", "GROUP BY", "FILTER"],
    answer: "ORDER BY",
  },
  {
    id: 14,
    questionText: "What is the purpose of the WHERE clause in SQL?",
    options: [
      "To specify which columns to return",
      "To filter records",
      "To sort records",
      "To group records"
    ],
    answer: "To filter records",
  },
  {
    id: 15,
    questionText: "Which command is used to remove a table in SQL?",
    options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
    answer: "DROP TABLE",
  },
  {
    id: 16,
    questionText: "What SQL command is used to update data in a database?",
    options: ["MODIFY", "UPDATE", "CHANGE", "SET"],
    answer: "UPDATE",
  },
  {
    id: 17,
    questionText: "Which of the following is a valid SQL function to find the number of rows in a table?",
    options: ["COUNT()", "SUM()", "TOTAL()", "NUM()"],
    answer: "COUNT()",
  },
  {
    id: 18,
    questionText: "Which SQL statement is used to create a new table?",
    options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "TABLE CREATE"],
    answer: "CREATE TABLE",
  },
  {
    id: 19,
    questionText: "What does the GROUP BY statement do in SQL?",
    options: [
      "Groups rows that have the same values in specified columns",
      "Orders the result set",
      "Filters records",
      "Combines multiple rows into a single row"
    ],
    answer: "Groups rows that have the same values in specified columns",
  },
  {
    id: 20,
    questionText: "What is the function of the JOIN clause in SQL?",
    options: [
      "To combine rows from two or more tables based on a related column",
      "To filter records",
      "To sort records",
      "To create a new table"
    ],
    answer: "To combine rows from two or more tables based on a related column",
  },
  // Node.js Questions
  {
    id: 21,
    questionText: "What is Node.js primarily used for?",
    options: ["Frontend development", "Database management", "Building server-side applications", "Desktop applications"],
    answer: "Building server-side applications",
  },
  {
    id: 22,
    questionText: "Which of the following is a Node.js package manager?",
    options: ["npm", "pip", "gem", "composer"],
    answer: "npm",
  },
  {
    id: 23,
    questionText: "What is the command to install a package using npm?",
    options: ["npm install <package-name>", "npm get <package-name>", "npm add <package-name>", "npm new <package-name>"],
    answer: "npm install <package-name>",
  },
  {
    id: 24,
    questionText: "Which method is used to create a server in Node.js?",
    options: ["http.createServer()", "server.create()", "createServer()", "http.startServer()"],
    answer: "http.createServer()",
  },
  {
    id: 25,
    questionText: "What does the 'fs' module in Node.js stand for?",
    options: ["File System", "File Storage", "File Service", "File Script"],
    answer: "File System",
  },
  {
    id: 26,
    questionText: "Which of the following is a framework built on top of Node.js?",
    options: ["Express", "Django", "Flask", "Ruby on Rails"],
    answer: "Express",
  },
  {
    id: 27,
    questionText: "What is the purpose of the middleware in Express?",
    options: [
      "To manage server load",
      "To handle requests and responses",
      "To connect to a database",
      "To serve static files"
    ],
    answer: "To handle requests and responses",
  },
  {
    id: 28,
    questionText: "How do you read a file in Node.js?",
    options: ["fs.readFile()", "fs.read()", "file.read()", "read.file()"],
    answer: "fs.readFile()",
  },
  {
    id: 29,
    questionText: "Which command is used to start a Node.js application?",
    options: ["node app.js", "npm start", "run app", "node start"],
    answer: "node app.js",
  },
  {
    id: 30,
    questionText: "What is the default port for an Express server?",
    options: ["3000", "8080", "5000", "8000"],
    answer: "3000",
  },
  // React Questions
  {
    id: 31,
    questionText: "What is React primarily used for?",
    options: ["Backend development", "Building user interfaces", "Database management", "Server configuration"],
    answer: "Building user interfaces",
  },
  {
    id: 32,
    questionText: "What does JSX stand for?",
    options: ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "Java XML Syntax"],
    answer: "JavaScript XML",
  },
  {
    id: 33,
    questionText: "Which method in a class component is called after the component is mounted?",
    options: ["componentDidMount()", "componentWillMount()", "render()", "constructor()"],
    answer: "componentDidMount()",
  },
  {
    id: 34,
    questionText: "What is the purpose of the useState hook in React?",
    options: ["To manage component lifecycle", "To manage state in functional components", "To make API calls", "To handle events"],
    answer: "To manage state in functional components",
  }, {
    id: 35,
    questionText: "What is the purpose of the useEffect hook in React?",
    options: [
      "To manage state in functional components",
      "To handle events",
      "To perform side effects in functional components",
      "To create context"
    ],
    answer: "To perform side effects in functional components",
  },
  {
    id: 36,
    questionText: "Which of the following is a valid way to create a functional component in React?",
    options: [
      "const MyComponent = () => {}",
      "function MyComponent() {}",
      "Both A and B",
      "class MyComponent extends React.Component {}"
    ],
    answer: "Both A and B",
  },
  {
    id: 37,
    questionText: "How do you pass data from a parent component to a child component in React?",
    options: ["Using props", "Using state", "Using context", "Using Redux"],
    answer: "Using props",
  },
  {
    id: 38,
    questionText: "What is the purpose of keys in React?",
    options: [
      "To uniquely identify elements in a list",
      "To manage state",
      "To handle events",
      "To improve performance"
    ],
    answer: "To uniquely identify elements in a list",
  },
  {
    id: 39,
    questionText: "Which of the following is NOT a lifecycle method in React?",
    options: [
      "componentDidUpdate",
      "componentWillUnmount",
      "render",
      "componentCreated"
    ],
    answer: "componentCreated",
  },
  {
    id: 40,
    questionText: "What does the Context API in React do?",
    options: [
      "Manages global state",
      "Handles API calls",
      "Creates custom hooks",
      "Manages component lifecycle"
    ],
    answer: "Manages global state",
  },
  {
    id: 41,
    questionText: "What is Redux used for in a React application?",
    options: [
      "Styling components",
      "Managing application state",
      "Routing",
      "Making API calls"
    ],
    answer: "Managing application state",
  },
  {
    id: 42,
    questionText: "What is the difference between a controlled and uncontrolled component?",
    options: [
      "Controlled components have their state managed by React, uncontrolled components do not",
      "Uncontrolled components use hooks, controlled components do not",
      "There is no difference",
      "Controlled components are class-based, uncontrolled components are functional"
    ],
    answer: "Controlled components have their state managed by React, uncontrolled components do not",
  },
  {
    id: 43,
    questionText: "How can you optimize performance in a React application?",
    options: [
      "Using React.memo",
      "Code splitting with React.lazy",
      "Both A and B",
      "Using inline styles"
    ],
    answer: "Both A and B",
  },
  {
    id: 44,
    questionText: "Which command is used to create a new React app using Create React App?",
    options: ["create-react-app my-app", "npx create-react-app my-app", "npm create-react-app my-app", "react create-app my-app"],
    answer: "npx create-react-app my-app",
  },
  {
    id: 45,
    questionText: "What is the default port for a React development server?",
    options: ["3000", "8080", "5000", "4000"],
    answer: "3000",
  },
  {
    id: 46,
    questionText: "What is a higher-order component in React?",
    options: [
      "A component that wraps another component to add functionality",
      "A component that manages state",
      "A component that fetches data",
      "A component that renders multiple children"
    ],
    answer: "A component that wraps another component to add functionality",
  },
  {
    id: 47,
    questionText: "Which of the following is a valid way to style a React component?",
    options: [
      "Inline styles",
      "CSS Modules",
      "Styled-components",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    id: 48,
    questionText: "What does the 'key' prop do in React lists?",
    options: [
      "Helps React identify which items have changed",
      "Defines a unique ID for each item",
      "Controls the visibility of elements",
      "None of the above"
    ],
    answer: "Helps React identify which items have changed",
  },
  {
    id: 49,
    questionText: "What is the main purpose of the React Router?",
    options: [
      "To manage application state",
      "To handle API requests",
      "To handle navigation between components",
      "To create forms"
    ],
    answer: "To handle navigation between components",
  },
  {
    id: 50,
    questionText: "What hook is used to manage side effects in functional components?",
    options: [
      "useEffect",
      "useState",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect",
  },
];
 

const Tests = ({ setScore }) => {
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

export default Tests;
