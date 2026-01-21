import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header navbar-expand-lg navbar-light bg-white ${isScrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', top: 42, left: 0, width: '100%', zIndex: 1000, display: 'flex', alignItems: 'center' }}>
      <div className="container-fluid px-md-5" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{ flexShrink: 0, marginBottom: 0 }}>
          Plum<span style={{ color: '#eda83a' }}>co</span>
        </NavLink>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ 
          backgroundColor: '#eda83a' }}></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse flex-grow-1 ms-4" id="navbarNav" style={{ display: 'flex !important', alignItems: 'center' }}>
          <ul className="navbar-nav ms-auto mb-0" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'nowrap' }}>
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link fw-500 ${isActive ? 'active text-primary' : 'text-dark'}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

             {/* CTA Button */}
            <NavLink to="/contact" className="btn-get-quote ms-3">
              GET FREE QUOTE
            </NavLink>
          </ul>

          
            
        </div>
      </div>
    </header>
  );
};

export default Header;