import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%), url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">Get in touch with our plumbing experts</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-lg">
            {/* Contact Form */}
            <div>
              <h2 className="mb-lg">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Please describe your plumbing needs..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-lg">Contact Information</h2>
              <div className="card mb-lg">
                <div className="flex items-center gap-md mb-md">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <h4>Address</h4>
                    <p>123 Plumbing Street<br />San Francisco, CA 94107</p>
                  </div>
                </div>

                <div className="flex items-center gap-md mb-md">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Phone Numbers</h4>
                    <p>Office: +1 (234) 567-8900<br />Emergency: +1 (234) 567-8911</p>
                  </div>
                </div>

                <div className="flex items-center gap-md mb-md">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>info@plumco.com<br />support@plumco.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-md">
                  <FaClock className="contact-icon" />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8AM - 8PM<br />Saturday: 9AM - 6PM<br />Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="mb-md">Emergency Service</h3>
                <p className="mb-md">For plumbing emergencies, call our 24/7 emergency line:</p>
                <div className="text-center">
                  <div className="phone-number" style={{ fontSize: '1.5rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>
                    +1 (234) 567-8911
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;