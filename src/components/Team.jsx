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
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
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