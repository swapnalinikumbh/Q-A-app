// ReactSection.js
import React, { useState } from 'react';

const ReactSection = () => {
  // Sample questions and answers data
  const reactQuestions = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript recommended for use with React. It looks similar to XML/HTML.',
    },
    // Add more questions and answers as needed
  ];

  // State to manage which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded question
  const toggleQuestion = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">ReactJS Section</h2>
      <ul className="list-group">
        {reactQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactSection;
