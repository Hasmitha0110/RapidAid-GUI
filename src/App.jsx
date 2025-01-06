import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/bodycontent/pages/Home/Home';
import Incidents from './components/bodycontent/pages/Incidents/Incidents';
import Resources from './components/bodycontent/pages/Resources/Resources';
import About from './components/bodycontent/pages/About/About';
import NavBar from './components/headercontent/NavBar';
import Footer from './components/footercontent/Footer';
import Contact from './components/bodycontent/pages/Contact/Contact';

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


















