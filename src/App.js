import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './Components/Dashboard';
import ReactSection from './Components/ReactSection';
import ReduxSection from './Components/ReduxSection';
import JavaScriptSection from './Components/JavaScriptSection';
import HTMLSection from './Components/HTMLSection';
import CSSSection from './Components/CSSSection';
import NonTech from "./Components/NonTech";
import logoImage from "../src/logoQ.jpg";

const topics = [
  { path: '/', label: 'Q & A', exact: true },
  { path: '/react', label: 'ReactJS' },
  { path: '/redux', label: 'Redux' },
  { path: '/javascript', label: 'JavaScript' },
  { path: '/html', label: 'HTML' },
  { path: '/css', label: 'CSS' },
  { path: '/non-tech', label: 'Non Tech' },
];

const logoStyle = {
  maxWidth: '40px',
  marginRight: '10px',
};

const Navbar = () => (
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div className="container">
      <Link to={topics[0].path} className="navbar-brand">
        <img src={logoImage} alt="Logo" className="logo" style={logoStyle} />
        {topics[0].label}
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {topics.slice(1).map((topic, index) => (
            <li key={index} className="nav-item">
              <Link to={topic.path} className="nav-link">
                {topic.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const copyrightStyle = {
  maxWidth: '20px',
  marginRight: '20px',
  borderRadius: '95%',
};

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/react" element={<ReactSection />} />
        <Route path="/redux" element={<ReduxSection />} />
        <Route path="/javascript" element={<JavaScriptSection />} />
        <Route path="/html" element={<HTMLSection />} />
        <Route path="/css" element={<CSSSection />} />
        <Route path="/non-tech" element={<NonTech />} />
      </Routes>

      <footer className="footer py-3 bg-light">
        <div className="container">
          <span className="text-muted">
            <img src={logoImage} alt="Logo" className="logo" style={copyrightStyle} />
            &copy; Q & A
          </span>
        </div>
      </footer>
    </Router>
  </div>
);

export default App;