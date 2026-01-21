import React from 'react';
import Header from '../Header';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

const PortfolioPage = () => {
  return (
    <>
      <Header />
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(124, 58, 237, 0.9) 0%, rgba(109, 40, 217, 0.8) 100%), url("/images/4p.jpg")',
        color: 'white',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="hero-content">
            <h1 className="display-4 fw-bold mb-4">Our Projects</h1>
            <p className="lead">
              Showcasing our latest plumbing projects and solutions for residential and commercial clients
            </p>
          </div>
        </div>
      </section>

      <Portfolio />
      <Footer />
    </>
  );
};

export default PortfolioPage;
