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
import NonTech from "./Components/NonTech";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Q & A
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
                <li className="nav-item">
                  <Link to="/non-tech" className="nav-link">
                    Non Tech
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
          <Route path="/non-tech" element={<NonTech/>}/>
        </Routes>

        {/* Footer Section */}
        <footer className="footer fixed-bottom py-3 bg-light">
          <div className="container">
            <span className="text-muted">copyright Q & A</span>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;