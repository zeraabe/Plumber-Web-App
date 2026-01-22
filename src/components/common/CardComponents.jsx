import React from 'react';
import { Image, AvatarImage } from './ImageComponent';

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link, 
  onLinkClick,
  badge = null,
  onClick = null
}) => (
  <div className="service-card" onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
    {badge && <span className="badge bg-primary position-absolute top-0 end-0 m-3">{badge}</span>}
    <div className="service-icon" aria-hidden="true">{icon}</div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    {link && (
      <a 
        href={link} 
        className="service-link" 
        onClick={onLinkClick}
        aria-label={`Learn more about ${title}`}
      >
        Learn More →
      </a>
    )}
  </div>
);


export const ProjectCard = ({ 
  title, 
  category, 
  image, 
  onClick,
  rating = null,
  hoverEffect = true
}) => (
  <div 
    className={`project-card ${hoverEffect ? 'cursor-pointer' : ''}`} 
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
  >
    <Image 
      src={image} 
      alt={title}
      className="project-image"
      lazy
    />
    <div className="project-content">
      <h3 className="project-title">{title}</h3>
      <span className="project-category">{category}</span>
      {rating && <span className="project-rating">★ {rating}</span>}
    </div>
  </div>
);


export const TeamCard = ({ 
  name, 
  role, 
  image, 
  experience, 
  socialLinks,
  email = null,
  bio = null
}) => (
  <div className="team-card">
    <Image 
      src={image} 
      alt={name}
      className="team-image"
      lazy
    />
    <div className="team-info">
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      {experience && <p className="team-experience">{experience} experience</p>}
      {bio && <p className="team-bio">{bio}</p>}
      {email && <a href={`mailto:${email}`} className="team-email">{email}</a>}
      {socialLinks && (
        <div className="team-social">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              className="social-link"
              aria-label={`${name}'s ${link.platform || 'social'} profile`}
              title={link.platform}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);


export const BlogCard = ({ 
  title, 
  excerpt, 
  image, 
  category, 
  date, 
  readTime, 
  onReadMore,
  featured = false,
  author = null
}) => (
  <article className={`blog-card ${featured ? 'featured' : ''}`}>
    {featured && <span className="badge bg-danger mb-2">Featured</span>}
    <Image 
      src={image} 
      alt={title}
      className="blog-image"
      lazy
    />
    <div className="blog-content">
      <div className="blog-meta">
        <span className="blog-category">{category}</span>
        <span className="blog-date">{date}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-excerpt">{excerpt}</p>
      {author && <p className="blog-author">By {author}</p>}
      <div className="blog-meta">
        <span className="read-time">📖 {readTime}</span>
        <a 
          href="#" 
          className="read-more" 
          onClick={onReadMore}
          aria-label={`Read more: ${title}`}
        >
          Read More →
        </a>
      </div>
    </div>
  </article>
);

export const TestimonialCard = ({ 
  text, 
  name, 
  role, 
  avatar,
  rating = 5,
  verified = false
}) => (
  <div className="testimonial-card">
    {rating && (
      <div className="testimonial-rating" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? '★' : '☆'}>★</span>
        ))}
      </div>
    )}
    <p className="testimonial-text">
      "{text}"
    </p>
    <div className="testimonial-author">
      <AvatarImage 
        src={avatar} 
        alt={name}
        size="md"
      />
      <div className="author-info">
        <h4>
          {name}
          {verified && <span className="badge bg-success ms-2" title="Verified customer">✓</span>}
        </h4>
        <p>{role}</p>
      </div>
    </div>
  </div>
);

export const StatItem = ({ 
  icon, 
  value, 
  suffix, 
  label, 
  prefix,
  trend = null,
  color = null
}) => (
  <div className="stat-item" style={color ? { '--stat-color': color } : {}}>
    <div className="stat-icon" aria-hidden="true">{icon}</div>
    <div className="stat-content">
      <div className="stat-number">
        {prefix}{value}{suffix}
        {trend && (
          <span className={`trend ${trend > 0 ? 'positive' : 'negative'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  </div>
);

export const BenefitItem = ({ icon, text, className = '' }) => (
  <li className={`benefit-item ${className}`}>
    {icon && <span className="benefit-icon" aria-hidden="true">{icon}</span>}
    <span className="benefit-text">{text}</span>
  </li>
);

export const ValueCard = ({ title, description, icon, className = '' }) => (
  <div className={`card value-card ${className}`}>
    {icon && <div className="value-icon">{icon}</div>}
    <h3 className="value-title">{title}</h3>
    <p className="value-description">{description}</p>
  </div>
);

export const FooterColumn = ({ title, children }) => (
  <div className="footer-column">
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export const FooterContactItem = ({ icon: IconComponent, label, children }) => (
  <li className="footer-contact">
    <IconComponent className="contact-icon" />
    <div>
      <strong>{label}:</strong><br />
      {children}
    </div>
  </li>
);

export const FooterLinkItem = ({ children }) => (
  <li>{children}</li>
);

export const HeroHeader = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  overlayGradient = 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(72, 100, 179, 0.8) 100%)'
}) => (
  <section 
    className="hero" 
    style={{ 
      backgroundImage: `${overlayGradient}, url("${backgroundImage}")`
    }}
  >
    <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  </section>
);


export const InfoBox = ({ 
  icon: IconComponent, 
  title, 
  description, 
  link = null,
  className = '' 
}) => (
  <div className={`info-box ${className}`}>
    {IconComponent && (
      <div className="info-icon" aria-hidden="true">
        <IconComponent />
      </div>
    )}
    <h4 className="info-title">{title}</h4>
    <p className="info-description">{description}</p>
    {link && (
      <a href={link.url} className="info-link" aria-label={`${link.text} - ${title}`}>
        {link.text} →
      </a>
    )}
  </div>
);


export const Alert = ({ 
  type = 'info', 
  title = null,
  message, 
  onClose = null,
  dismissible = false,
  icon = null,
  className = ''
}) => (
  <div className={`alert alert-${type} ${dismissible ? 'alert-dismissible fade show' : ''} ${className}`} role="alert">
    {icon && <span className="alert-icon me-2">{icon}</span>}
    {title && <h5 className="alert-title">{title}</h5>}
    <p className="alert-message">{message}</p>
    {dismissible && (
      <button 
        type="button" 
        className="btn-close" 
        onClick={onClose}
        aria-label="Close alert"
      ></button>
    )}
  </div>
);


export const Badge = ({ 
  children, 
  variant = 'primary',
  className = '',
  pill = false,
  dismissible = false,
  onDismiss = null
}) => (
  <span className={`badge bg-${variant} ${pill ? 'rounded-pill' : ''} ${className}`}>
    {children}
    {dismissible && (
      <button
        type="button"
        className="btn-close btn-close-white ms-1 p-0"
        onClick={onDismiss}
        aria-label="Remove badge"
        style={{ fontSize: '0.75rem' }}
      ></button>
    )}
  </span>
);


export default {
  ServiceCard,
  ProjectCard,
  TeamCard,
  BlogCard,
  TestimonialCard,
  StatItem,
  BenefitItem,
  ValueCard,
  FooterColumn,
  FooterContactItem,
  FooterLinkItem,
  HeroHeader,
  InfoBox,
  Alert,
  Badge
};
