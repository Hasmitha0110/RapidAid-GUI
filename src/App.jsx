import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Incidents from './pages/Incidents';
import Resources from './pages/Resources';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/incidents">Incidents</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;


















