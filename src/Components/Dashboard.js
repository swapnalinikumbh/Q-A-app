import React from 'react';
import { Link } from 'react-router-dom';
import react from '../../src/reactsymbol.jpg';
import redux from '../../src/reduxsymbol.png';
import javascript from '../../src/jssymbol.png';
import html from '../../src/htmlsymbol.jpg';
import css from '../../src/csssymbol.png';
import nonTech from '../../src/nontechsymbol.png';

const topics = [
  { id: 1, name: 'ReactJS', image: react, link: '/react' },
  { id: 2, name: 'Redux', image: redux, link: '/redux' },
  { id: 3, name: 'JavaScript', image: javascript, link: '/javascript' },
  { id: 4, name: 'HTML', image: html, link: '/html' },
  { id: 5, name: 'CSS', image: css, link: '/css' },
  { id: 6, name: 'Non Tech', image: nonTech, link: '/non-tech' },
];


const dashStyle = {
  maxWidth: '60px', // Adjust the size as needed
  marginRight: '45px', // Add some margin for spacing
  borderRadius: '60%', // Make the logo round
};

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 style={{ marginBottom: '1rem', marginTop: '7rem' }}>Dashboard</h2>
      <ul className="list-group">
        {topics.map((topic) => (
          <li key={topic.id} className="list-group-item">
            <img src={topic.image} alt={`${topic.name} Logo`} className="logo" style={dashStyle} />
            <Link to={topic.link}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
