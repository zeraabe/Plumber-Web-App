import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { TeamCard } from './common/CardComponents';
import { SectionHeader, Section, Container } from './common/LayoutComponents';

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Henry Barton', 
      role: 'Lead Plumber', 
      image: '/images/team-member.svg',
      experience: '18 years',
      socialLinks: [
        { url: '#', icon: <FaFacebookF /> },
        { url: '#', icon: <FaTwitter /> },
        { url: '#', icon: <FaLinkedinIn /> },
        { url: '#', icon: <FaInstagram /> },
      ]
    },
    { 
      id: 2, 
      name: 'Mattie Washington', 
      role: 'Plumbing Engineer', 
      image: '/images/team-member.svg',
      experience: '14 years',
      socialLinks: [
        { url: '#', icon: <FaFacebookF /> },
        { url: '#', icon: <FaTwitter /> },
        { url: '#', icon: <FaLinkedinIn /> },
        { url: '#', icon: <FaInstagram /> },
      ]
    },
    { 
      id: 3, 
      name: 'Winifred Harmon', 
      role: 'Service Manager', 
      image: '/images/team-member.svg',
      experience: '12 years',
      socialLinks: [
        { url: '#', icon: <FaFacebookF /> },
        { url: '#', icon: <FaTwitter /> },
        { url: '#', icon: <FaLinkedinIn /> },
        { url: '#', icon: <FaInstagram /> },
      ]
    },
    { 
      id: 4, 
      name: 'Shelia Lawrence', 
      role: 'Project Coordinator', 
      image: '/images/team-member.svg',
      experience: '11 years',
      socialLinks: [
        { url: '#', icon: <FaFacebookF /> },
        { url: '#', icon: <FaTwitter /> },
        { url: '#', icon: <FaLinkedinIn /> },
        { url: '#', icon: <FaInstagram /> },
      ]
    },
  ];

  return (
    <Section bgLight>
      <Container>
        <SectionHeader 
          title="Dedicated Member"
          subtitle="Meet our team of certified professionals dedicated to providing exceptional service."
        />

        <div className="team-grid">
          {teamMembers.map(member => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              experience={member.experience}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Team;