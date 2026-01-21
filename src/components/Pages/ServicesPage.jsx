import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaWater, FaToilet, FaTools, FaShower, FaFire, FaCog } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaWater />,
      title: 'Leak Repair',
      description: 'Professional leak detection and repair services for all types of plumbing systems.',
      features: ['Pipe Leaks', 'Faucet Leaks', 'Toilet Leaks', 'Water Line Leaks']
    },
    {
      icon: <FaToilet />,
      title: 'Toilet Repair',
      description: 'Comprehensive toilet installation, repair, and maintenance services.',
      features: ['Toilet Installation', 'Clog Removal', 'Flapper Replacement', 'Seal Repair']
    },
    {
      icon: <FaTools />,
      title: 'Pipe Repair',
      description: 'Expert pipe repair and replacement using the latest technology and materials.',
      features: ['Pipe Replacement', 'Pipe Relining', 'Corrosion Repair', 'Freeze Protection']
    },
    {
      icon: <FaShower />,
      title: 'Shower Repair',
      description: 'Complete shower and bathtub plumbing installation and repair services.',
      features: ['Shower Valve Repair', 'Drain Cleaning', 'Water Pressure Issues', 'Tile Work']
    },
    {
      icon: <FaFire />,
      title: 'Water Heater',
      description: 'Installation, repair, and maintenance of all types of water heating systems.',
      features: ['Tank Installation', 'Tankless Systems', 'Maintenance', 'Emergency Repair']
    },
    {
      icon: <FaCog />,
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and sewer line services for residential and commercial.',
      features: ['Drain Unclogging', 'Sewer Line Cleaning', 'Hydro Jetting', 'Video Inspection']
    },
  ];

  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%), url("/images/serp.jpg")' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Our Services</h1>
            <p className="hero-subtitle">Comprehensive plumbing solutions for every need</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Professional Plumbing Services</h2>
            <p className="section-subtitle">
              We offer a wide range of plumbing services for both residential and commercial properties.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="mb-lg">
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline">Request Service</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-3 gap-lg">
            <div className="card text-center">
              <h3>24/7 Emergency Service</h3>
              <p>Available round the clock for emergency plumbing situations</p>
            </div>
            <div className="card text-center">
              <h3>Licensed & Insured</h3>
              <p>Fully licensed, bonded, and insured for your protection</p>
            </div>
            <div className="card text-center">
              <h3>Satisfaction Guarantee</h3>
              <p>We stand behind our work with a 100% satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;