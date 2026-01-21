import React from 'react';
import Slider from 'react-slick';
import { TestimonialCard } from './common/CardComponents';
import { SectionHeader, Section, Container } from './common/LayoutComponents';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Robert William',
      role: 'CEO & Founder, TechCorp',
      text: 'Plumco provided exceptional service for our office plumbing needs. Their team was professional, efficient, and solved our complex plumbing issues.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Ken Williamson',
      role: 'Homeowner',
      text: 'Emergency service at its best! When our pipes burst at 2 AM, Plumco responded within 30 minutes and fixed everything professionally.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Sarah Miller',
      role: 'Property Manager',
      text: 'We\'ve been using Plumco for all our rental properties for 3 years. Reliable, affordable, and always professional. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Section>
      <Container>
        <SectionHeader 
          title="What People's Say"
          subtitle="Hear from our satisfied customers about their experience with Plumco."
        />

        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map(testimonial => (
              <TestimonialCard
                key={testimonial.id}
                text={testimonial.text}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;