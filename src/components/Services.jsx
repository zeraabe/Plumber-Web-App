import React from 'react';
import { 
  FaWater, FaToilet, FaTools, FaShower, 
  FaFire, FaCog, FaCheckCircle 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ServiceCard, BenefitItem } from './common/CardComponents';
import { SectionHeader, Section, Container } from './common/LayoutComponents';

const Services = () => {
  const services = [
    { icon: <FaWater />, title: 'Commercial Plumbing', description: 'Professional plumbing solutions for commercial properties and office buildings.' },
    { icon: <FaToilet />, title: 'Residential Plumbing', description: 'Complete plumbing services for homes and residential buildings.' },
    { icon: <FaShower />, title: 'Kitchen Plumbing', description: 'Expert kitchen sink, faucet, and dishwasher installation and repair.' },
    { icon: <FaFire />, title: 'Gas Line Services', description: 'Safe and efficient gas line installation and maintenance services.' },
    { icon: <FaTools />, title: 'Water Line Repair', description: 'Professional water line detection, repair, and replacement.' },
    { icon: <FaCog />, title: 'Bathroom Plumbing', description: 'Comprehensive bathroom plumbing including fixtures and renovations.' },
    { icon: <FaCheckCircle />, title: 'Drain Cleaning', description: 'Advanced drain cleaning and unclogging using state-of-the-art equipment.' },
    { icon: <FaWater />, title: 'Basement Plumbing', description: 'Basement waterproofing and plumbing solutions for new construction or existing homes.' },
  ];

  const benefits = [
    '24/7 Emergency Service',
    'Licensed & Insured',
    'Upfront Pricing',
    'Satisfaction Guaranteed',
    'Latest Equipment',
    'Same Day Service'
  ];

  return (
    <Section bgLight>
      <Container>
        <SectionHeader 
          title="Best Service We Offer"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link="/services"
            />
          ))}
        </div>

        <div className="usp-section">
          <h3>We are the Productive Difference in Plumbing Services</h3>
          <p className="mb-lg">
            Our commitment to excellence sets us apart from the competition. We use 
            state-of-the-art equipment and employ certified professionals.
          </p>
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={<FaCheckCircle className="benefit-icon" />}
                text={benefit}
              />
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
};

export default Services;