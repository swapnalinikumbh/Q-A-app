// App.js
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ReactSection from './Components/ReactSection';
import ReduxSection from './Components/ReduxSection';
import JavaScriptSection from './Components/JavaScriptSection';
import HTMLSection from './Components/HTMLSection';
import CSSSection from './Components/CSSSection';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Dashboard
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/react" className="nav-link">
                    ReactJS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/redux" className="nav-link">
                    Redux
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/javascript" className="nav-link">
                    JavaScript
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/html" className="nav-link">
                    HTML
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/css" className="nav-link">
                    CSS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/react" element={<ReactSection />} />
          <Route path="/redux" element={<ReduxSection />} />
          <Route path="/javascript" element={<JavaScriptSection />} />
          <Route path="/html" element={<HTMLSection />} />
          <Route path="/css" element={<CSSSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;