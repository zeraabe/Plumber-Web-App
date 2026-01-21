import React, { useState } from 'react';
import { ProjectCard } from './common/CardComponents';
import { SectionHeader, FilterButtons, Section, Container } from './common/LayoutComponents';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, title: 'Commercial Plumbing', category: 'commercial', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Residential Repair', category: 'residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Pipe Installation', category: 'installation', image: 'https://images.unsplash.com/photo-1621967299229-c6a8ed3d7f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Water Heater Setup', category: 'installation', image: 'https://images.unsplash.com/photo-1622630998476-a4c2dcd0d3c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Office Plumbing', category: 'commercial', image: 'https://images.unsplash.com/photo-1600585154340-043788447ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Kitchen Plumbing', category: 'residential', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'installation', label: 'Installation' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section>
      <Container>
        <SectionHeader 
          title="Our Latest Project"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <FilterButtons 
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;