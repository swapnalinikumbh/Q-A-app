import React from 'react';
import { Link } from 'react-router-dom';
import react from '../../src/Components/Images/reactsymbol.jpg';
import redux from '../../src/Components/Images/reduxsymbol.png';
import javascript from '../../src/Components/Images/jssymbol.png';
import html from '../../src/Components/Images/htmlsymbol.jpg';
import css from '../../src/Components/Images/csssymbol.png';
import nonTech from '../../src/Components/Images/nontechsymbol.png';

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

const linkStyle = {
  textDecoration: 'none', // Remove underline from the link
  color: 'black', // Set the text color
  fontSize: '20px', // Set the font size
  fontFamily: 'Arial, sans-serif',
};

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 style={{ marginBottom: '1rem', marginTop: '7rem' }}>Dashboard</h2>
      <ul className="list-group">
        {topics.map((topic) => (
          <li key={topic.id} className="list-group-item justify-content-between align-items-center">
            <img src={topic.image} alt={`${topic.name} Logo`} className="logo" style={dashStyle} />
            <Link to={topic.link} style={linkStyle}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
