import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ServicesPage from './components/Pages/ServicesPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import Contact from './components/Pages/Contact';
import BlogPage from './components/Pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;