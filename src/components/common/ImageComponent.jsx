import React, { useState } from 'react';

/**
 * Reusable Image Component with lazy loading, fallback, and error handling
 * Supports both external URLs and local images
 */
export const Image = ({
  src,
  alt = 'Image',
  className = '',
  width = 'auto',
  height = 'auto',
  objectFit = 'cover',
  lazy = true,
  fallback = null,
  onLoad = null,
  onError = null,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(!lazy);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  if (hasError && fallback) {
    return fallback;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      width={width === 'auto' ? undefined : width}
      height={height === 'auto' ? undefined : height}
      style={{
        width: width === 'auto' ? '100%' : width,
        height: height === 'auto' ? 'auto' : height,
        objectFit,
        transition: 'opacity 0.3s ease-in-out'
      }}
      loading={lazy ? 'lazy' : 'eager'}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

/**
 * Image Card Component - for displaying images with overlay effects
 */
export const ImageCard = ({
  src,
  alt = 'Image',
  title = null,
  description = null,
  className = '',
  imageClassName = '',
  overlay = false,
  onClick = null
}) => {
  return (
    <div
      className={`position-relative overflow-hidden bg-light ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{
        aspectRatio: '16 / 9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease'
      }}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <Image
        src={src}
        alt={alt}
        className={`w-100 h-100 ${imageClassName}`}
        objectFit="cover"
        lazy
      />
      {overlay && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px',
            color: 'white'
          }}
        >
          {title && <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>{title}</h3>}
          {description && <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>{description}</p>}
        </div>
      )}
    </div>
  );
};

/**
 * Avatar Image Component - for profile pictures and user avatars
 */
export const AvatarImage = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
  border = false,
  status = null
}) => {
  const sizes = {
    sm: '40px',
    md: '60px',
    lg: '100px',
    xl: '150px'
  };

  const sizeValue = sizes[size] || sizes.md;

  return (
    <div
      style={{
        position: 'relative',
        width: sizeValue,
        height: sizeValue
      }}
    >
      <Image
        src={src}
        alt={alt}
        className={`rounded-circle ${className} ${border ? 'border-2' : ''}`}
        width={sizeValue}
        height={sizeValue}
        objectFit="cover"
        style={{
          border: border ? '3px solid #fff' : 'none'
        }}
      />
      {status && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: status === 'online' ? '#28a745' : '#6c757d',
            border: '2px solid white'
          }}
        />
      )}
    </div>
  );
};

/**
 * Responsive Background Image Component
 */
export const BackgroundImageSection = ({
  src,
  alt = 'Background',
  children,
  className = '',
  overlay = 'rgba(0, 0, 0, 0.5)',
  minHeight = '400px',
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight,
        position: 'relative',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Image;
