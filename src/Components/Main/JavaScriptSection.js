import React, { useState } from 'react'
import { javaScriptQuestions } from '../Data/JsData';
const JavaScriptSection = () => {

  // State to manage which question is currently expanded
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded question
  const toggleQuestion = (index) => {
    setExpandedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mt-5">
      <h2 style={{ marginTop: '7rem' }} className="mb-4">JavaScript Section</h2>
      <ul className="list-group">
        {javaScriptQuestions.map((q, index) => (
          <li key={index} className="list-group-item">
            <div
              onClick={() => toggleQuestion(index)}
              style={{ cursor: 'pointer', marginBottom: '8px', fontSize: '18px', }}
              className="font-weight-bold"
            >
              {q.question}
            </div>
            {expandedQuestion === index && <div className="answer-container text-dark p-3">{q.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JavaScriptSection;