import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mt-5"> {/* Use Bootstrap container class */}
      <h2 style={{ marginBottom: '1rem', marginTop: '7rem' }}>Dashboard</h2>
      <ul className="list-group"> {/* Use Bootstrap list-group class */}
        <li className="list-group-item">
          <Link to="/react">ReactJS</Link>
        </li>
        <li className="list-group-item">
          <Link to="/redux">Redux</Link>
        </li>
        <li className="list-group-item">
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li className="list-group-item">
          <Link to="/html">HTML</Link>
        </li>
        <li className="list-group-item">
          <Link to="/css">CSS</Link>
        </li>
        <li className="list-group-item">
          <Link to="/non-tech">Non Tech</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
