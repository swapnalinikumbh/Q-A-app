import React, { useState } from 'react'

const JavaScriptSection = () => {
  const javaScriptQuestions = [
    {
      question: '1.	Data types in js ?',
      answer: (
        <>
        <strong>Primitive Data Types:( Pass by Value)</strong><br/><br/>
        <h6>Number: </h6>Represents both integer and floating-point numbers.<br/>
        <h6>String: </h6>Represents sequences of characters, like text.<br/>
        <h6>Boolean: </h6>Represents a true or false value.<br/>
        <h6>Undefined: </h6>Represents a variable that has been declared but hasn't been assigned a value.<br/>
        <h6>Null: </h6>Represents the intentional absence of any object or value.<br/>
        <h6>Symbol: </h6>Represents unique and immutable values, always used as object property keys.<br/><br/>
        <strong>Non-Primitive Data Types:( Pass by Reference)</strong><br/><br/>
        <h6>Object: </h6>A complex data type that can store key-value pairs, functions, and other objects.<br/>
        <h6>Array: </h6>A special type of object used to store ordered collections of data.<br/>
        <h6>Function: </h6>A reusable block of code that can be invoked with arguments.<br/>
        <h6>Date: </h6>Represents dates and times.
        </>
      ),
    },
    {
      question: '2.What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript recommended for use with React. It looks similar to XML/HTML.',
    },
    {
      question: '3',
      answer: '',
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
        {javaScriptQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px' }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="answer-container bg-light-blue text-dark p-3">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JavaScriptSection;