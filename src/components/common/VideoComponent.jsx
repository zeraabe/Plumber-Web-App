import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

/**
 * VideoPlayButton Component
 * Displays a play button with hover effects for triggering video playback
 */
export const VideoPlayButton = ({ onClick, size = 'large', style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    small: { outer: '60px', icon: '24px' },
    medium: { outer: '100px', icon: '40px' },
    large: { outer: '140px', icon: '60px' }
  };

  const currentSize = sizes[size] || sizes.large;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: currentSize.outer,
        height: currentSize.outer,
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'rgba(237, 168, 58, 0.9)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: isHovered 
          ? '0 15px 40px rgba(237, 168, 58, 0.6)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'all 0.3s ease',
        ...style
      }}
      aria-label="Play video"
    >
      <FaPlay 
        size={currentSize.icon} 
        color="white"
        style={{ marginLeft: '4px' }}
      />
    </button>
  );
};

/**
 * VideoModal Component
 * Modal overlay for displaying YouTube videos
 */
export const VideoModal = ({ 
  videoId, 
  isOpen = false, 
  onClose,
  title = 'Video'
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '16 / 9'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-50px',
            right: 0,
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '30px',
            cursor: 'pointer',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10001
          }}
          aria-label="Close video"
        >
          <FaTimes size={32} />
        </button>

        {/* Video Container */}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '8px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

/**
 * VideoPreview Component
 * Static video preview with play button overlay
 */
export const VideoPreview = ({ 
  videoId, 
  onClick,
  title = 'Video Preview',
  width = '100%',
  height = 'auto',
  thumbnailQuality = 'hqdefault' // 'default', 'medium', 'high', 'standard', 'maxres'
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`;

  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        aspectRatio: '16 / 9',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease'
      }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease'
        }}
      >
        <VideoPlayButton size="large" />
      </div>
    </div>
  );
};

export default VideoPlayButton;
