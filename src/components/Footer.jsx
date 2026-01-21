import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FooterColumn, FooterContactItem } from './common';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Leak Repair',
    'Toilet Repair',
    'Pipe Repair',
    'Shower Repair',
    'Water Heater',
    'Drain Cleaning',
    'Emergency Service'
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      text: <>123 Plumbing Street,<br />San Francisco, CA 94107</>
    },
    {
      icon: FaPhone,
      label: 'Phone',
      text: '+1 (234) 567-8900'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      text: 'info@plumco.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <FooterColumn>
            <div className="footer-logo">
              Plum<span>co</span>
            </div>
            <p className="footer-about">
              Professional plumbing services for residential and commercial properties. 
              Certified, licensed, and insured plumbers ready to serve you 24/7.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </FooterColumn>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Services */}
          <FooterColumn title="Our Services">
            <ul className="footer-links">
              {services.map(service => (
                <li key={service}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Contact Info */}
          <FooterColumn title="Contact Info">
            <ul className="footer-links">
              {contactInfo.map((info, idx) => (
                <FooterContactItem
                  key={idx}
                  icon={info.icon}
                  label={info.label}
                >
                  {info.text}
                </FooterContactItem>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Plumco Plumbing Services. All rights reserved.</p>
          <p>Designed for reliable plumbing solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;