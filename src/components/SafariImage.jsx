import { useState } from 'react';

export default function SafariImage({
  src,
  alt,
  ratio = 'aspect-[3/2]', // Default for cards
  containerClass = '',
  overlay = true,
  loading = 'lazy',
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-xl ${ratio} ${containerClass} safari-image-container`}>
      {/* Loading Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-safari-sand/50 to-safari-sand/30 animate-pulse safari-loading"></div>
      )}
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover safari-image ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
      {/* Gradient Overlay */}
      {overlay && loaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent safari-frame"></div>
      )}
    </div>
  );
}
