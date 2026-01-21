import React from 'react';

// Reusable Form Input Component
export const FormInput = ({
  label,
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error = '',
  maxLength = null,
  minLength = null,
  pattern = null,
  className = ''
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
    )}
    <input
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${name}-error` : null}
      className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
    />
    {error && (
      <div id={`${name}-error`} className="invalid-feedback d-block">
        {error}
      </div>
    )}
  </div>
);

// Reusable Form Select Component
export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  disabled = false,
  error = '',
  placeholder = 'Select an option',
  className = ''
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
    )}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${name}-error` : null}
      className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
    >
      <option value="">{placeholder}</option>
      {options && options.map(opt => (
        <option key={opt.value || opt} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
    {error && (
      <div id={`${name}-error`} className="invalid-feedback d-block">
        {error}
      </div>
    )}
  </div>
);

// Reusable Textarea Component
export const FormTextarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  error = '',
  rows = 5,
  maxLength = null,
  minLength = null,
  className = ''
}) => (
  <div className="form-group">
    {label && (
      <label htmlFor={name}>
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
    )}
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      rows={rows}
      maxLength={maxLength}
      minLength={minLength}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${name}-error` : null}
      className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
    />
    {maxLength && (
      <small className="text-muted">
        {value?.length || 0}/{maxLength}
      </small>
    )}
    {error && (
      <div id={`${name}-error`} className="invalid-feedback d-block">
        {error}
      </div>
    )}
  </div>
);

// Reusable Button Component
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
  fullWidth = false,
  ariaLabel = null
}) => {
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';
  const variantClass = variant === 'outline' ? 'btn-outline' : variant === 'light' ? 'btn-light' : `btn-${variant}`;
  const widthClass = fullWidth ? 'w-100' : '';

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// Reusable Button Group Component
export const ButtonGroup = ({ children, vertical = false, className = '' }) => (
  <div className={`btn-group ${vertical ? 'btn-group-vertical' : ''} ${className}`} role="group">
    {children}
  </div>
);

export default {
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  ButtonGroup
};
