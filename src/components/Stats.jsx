import React, { useEffect, useState, useRef } from 'react';
import { 
  FaProjectDiagram, FaRunning, FaUsers, 
  FaSmile, FaAward 
} from 'react-icons/fa';
import { StatItem } from './common/CardComponents';
import { Section, Container } from './common/LayoutComponents';

const Stats = () => {
  const statsRef = useRef(null);
  const [counters, setCounters] = useState({
    projects: 0,
    running: 0,
    team: 0,
    clients: 0,
    awards: 0
  });

  const targetValues = {
    projects: 89,
    running: 200,
    team: 85,
    clients: 39,
    awards: 45
  };

  const statsData = [
    { 
      icon: <FaProjectDiagram />, 
      value: counters.projects, 
      suffix: 'K', 
      label: 'Projects',
      key: 'projects'
    },
    { 
      icon: <FaRunning />, 
      value: counters.running, 
      label: 'Running Project',
      key: 'running'
    },
    { 
      icon: <FaUsers />, 
      value: counters.team, 
      suffix: '+', 
      label: 'Team Member',
      key: 'team'
    },
    { 
      icon: <FaSmile />, 
      value: counters.clients, 
      suffix: 'K', 
      label: 'Happy Clients',
      key: 'clients'
    },
    { 
      icon: <FaAward />, 
      value: counters.awards, 
      label: 'Award-winning',
      key: 'awards'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCounters(prev => {
              const newCounters = { ...prev };
              let allComplete = true;

              Object.keys(targetValues).forEach(key => {
                if (newCounters[key] < targetValues[key]) {
                  newCounters[key] += 1;
                  allComplete = false;
                }
              });

              if (allComplete) {
                clearInterval(interval);
              }

              return newCounters;
            });
          }, 30);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <Section className="stats" ref={statsRef}>
      <Container>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Stats;