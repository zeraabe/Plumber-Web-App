import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ValueCard, Image } from '../common';

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in honest pricing and transparent communication with every client.'
    },
    {
      title: 'Excellence',
      description: 'Every job is completed to the highest standards of quality and craftsmanship.'
    },
    {
      title: 'Reliability',
      description: 'We show up on time and complete the job as promised, every single time.'
    }
  ];

  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(72, 100, 179, 0.8) 100%), url("/images/about-hero.svg")' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Plumco</h1>
            <p className="hero-subtitle">Professional plumbing services since 2005</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-lg items-center">
            <div>
              <h2>Our Story</h2>
              <p>
                Founded in 2005, Plumco Plumbing Services began as a small family business 
                with a simple mission: provide reliable, affordable plumbing services to 
                our community.
              </p>
              <p>
                Today, we've grown into one of the most trusted plumbing companies in 
                the region, serving both residential and commercial clients.
              </p>
            </div>
            <div>
              <Image 
                src="/images/1p.jpg" 
                alt="Our Team" 
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
          </div>
          <div className="grid grid-cols-3 gap-lg">
            {values.map((value, idx) => (
              <ValueCard
                key={idx}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;