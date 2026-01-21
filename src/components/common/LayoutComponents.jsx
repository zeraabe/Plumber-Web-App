import React from 'react';

// Reusable Section Header Component
export const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div className={`section-title ${centered ? 'text-center' : ''}`}>
    <h2>{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

// Reusable Grid Container Component
export const GridContainer = ({ children, columns = 3, gap = 'var(--space-lg)' }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
    gap: gap
  }}>
    {children}
  </div>
);

// Reusable Filter Button Group Component
export const FilterButtons = ({ filters, activeFilter, onFilterChange }) => (
  <div className="portfolio-filter">
    {filters.map(filter => (
      <button
        key={filter.id}
        className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
        onClick={() => onFilterChange(filter.id)}
      >
        {filter.label}
      </button>
    ))}
  </div>
);

// Reusable Container Component
export const Container = ({ children, fluid = false, className = '' }) => (
  <div className={`${fluid ? 'container-fluid' : 'container'} ${className}`}>
    {children}
  </div>
);

// Reusable Section Component (wraps everything)
export const Section = ({ children, bgLight = false, className = '' }) => (
  <section className={`section ${bgLight ? 'section-light' : ''} ${className}`}>
    {children}
  </section>
);

// Reusable Form Row Component (for grouping 2 form fields side-by-side)
export const FormRow = ({ children, className = '' }) => (
  <div className={`form-row ${className}`}>
    {children}
  </div>
);

// Reusable Form Group Component (single form field wrapper)
export const FormGroup = ({ 
  label, 
  error, 
  required = false, 
  children,
  className = ''
}) => (
  <div className={`form-group ${className}`}>
    {label && (
      <label className="form-label">
        {label}
        {required && ' *'}
      </label>
    )}
    {children}
    {error && <p className="form-error">{error}</p>}
  </div>
);

export default {
  SectionHeader,
  GridContainer,
  FilterButtons,
  Container,
  Section,
  FormRow,
  FormGroup
};