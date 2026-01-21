import React from 'react';

// Loading Spinner Component
export const LoadingSpinner = ({ 
  size = 'md', 
  message = 'Loading...',
  centered = true,
  className = ''
}) => {
  const sizeClass = {
    sm: 'spinner-border-sm',
    md: '',
    lg: ''
  }[size] || '';

  return (
    <div className={`d-flex flex-column align-items-center ${centered ? 'justify-content-center min-vh-100' : ''} ${className}`}>
      <div className={`spinner-border ${sizeClass}`} role="status" aria-hidden="true">
        <span className="visually-hidden">Loading...</span>
      </div>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

// Skeleton Loader Component (for content placeholders)
export const Skeleton = ({ 
  width = '100%', 
  height = '20px',
  circle = false,
  className = '',
  count = 1
}) => (
  <>
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className={`placeholder-glow ${className}`}
        style={{
          width,
          height,
          borderRadius: circle ? '50%' : '4px',
          backgroundColor: '#e9ecef',
          marginBottom: '10px'
        }}
        aria-hidden="true"
      >
        <span className="placeholder" style={{ width: '100%', height: '100%' }}></span>
      </div>
    ))}
  </>
);

// Empty State Component
export const EmptyState = ({ 
  icon = null,
  title,
  description,
  action = null,
  className = ''
}) => (
  <div className={`empty-state text-center py-5 ${className}`}>
    {icon && <div className="empty-icon mb-3">{icon}</div>}
    <h3 className="empty-title">{title}</h3>
    {description && <p className="empty-description text-muted">{description}</p>}
    {action && (
      <div className="empty-action mt-4">
        {action}
      </div>
    )}
  </div>
);

// Tooltip Component (wrapper - relies on Bootstrap tooltip)
export const Tooltip = ({ 
  children, 
  content,
  placement = 'top',
  className = ''
}) => (
  <span 
    className={className}
    title={content}
    data-bs-toggle="tooltip" 
    data-bs-placement={placement}
  >
    {children}
  </span>
);

// Progress Bar Component
export const ProgressBar = ({ 
  value = 0,
  max = 100,
  label = null,
  variant = 'primary',
  striped = false,
  animated = false,
  showValue = false,
  className = ''
}) => {
  const percentage = (value / max) * 100;

  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <div className="progress" style={{ height: '25px' }}>
        <div
          className={`progress-bar ${variant ? `bg-${variant}` : ''} ${striped ? 'progress-bar-striped' : ''} ${animated ? 'progress-bar-animated' : ''} ${className}`}
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        >
          {showValue && `${Math.round(percentage)}%`}
        </div>
      </div>
    </div>
  );
};

// Modal/Dialog Component (simple wrapper)
export const Modal = ({ 
  isOpen,
  title,
  children,
  footer = null,
  onClose,
  size = 'md',
  centered = true,
  className = ''
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ paddingRight: '17px' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={`modal-dialog modal-${size} ${centered ? 'modal-dialog-centered' : ''}`}>
        <div className={`modal-content ${className}`}>
          <div className="modal-header">
            <h5 className="modal-title" id="modal-title">{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {footer && (
            <div className="modal-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Divider Component
export const Divider = ({ 
  text = null,
  className = '',
  variant = 'default'
}) => (
  <div className={`divider ${variant} ${className}`}>
    {text && <span className="divider-text">{text}</span>}
  </div>
);

// Breadcrumb Component
export const Breadcrumb = ({ 
  items = [],
  className = ''
}) => (
  <nav aria-label="breadcrumb" className={className}>
    <ol className="breadcrumb">
      {items.map((item, idx) => (
        <li 
          key={idx}
          className={`breadcrumb-item ${item.active ? 'active' : ''}`}
          aria-current={item.active ? 'page' : undefined}
        >
          {item.active ? (
            item.label
          ) : (
            <a href={item.url}>{item.label}</a>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default {
  LoadingSpinner,
  Skeleton,
  EmptyState,
  Tooltip,
  ProgressBar,
  Modal,
  Divider,
  Breadcrumb
};
