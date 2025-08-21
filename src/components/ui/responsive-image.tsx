import React from 'react';

interface ResponsiveImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export function ResponsiveImage({
  src,
  webpSrc,
  alt,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  width,
  height,
  onLoad,
  onError,
}: ResponsiveImageProps) {
  // If we have WebP source, use picture element for format selection
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt}
          className={className}
          loading={priority ? 'eager' : loading}
          width={width}
          height={height}
          decoding="async"
          onLoad={onLoad}
          onError={onError}
        />
      </picture>
    );
  }

  // Fallback to regular img tag
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : loading}
      width={width}
      height={height}
      decoding="async"
      sizes={sizes}
      onLoad={onLoad}
      onError={onError}
    />
  );
}

// Profile image component with preset responsive sizes
export function ProfileImage({
  src,
  webpSrc,
  alt,
  className = '',
  loading = 'lazy',
}: Omit<ResponsiveImageProps, 'sizes' | 'width' | 'height'>) {
  return (
    <ResponsiveImage
      src={src}
      webpSrc={webpSrc}
      alt={alt}
      className={className}
      loading={loading}
      sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 500px"
      width={500}
      height={667}
    />
  );
}

// Hero background image component with loading state
export function HeroBackgroundImage({
  src,
  webpSrc,
  alt,
  className = '',
}: Omit<ResponsiveImageProps, 'loading' | 'sizes' | 'width' | 'height'>) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className="relative w-full h-full" style={{ backgroundColor: '#E8D9D3' }}>
      <ResponsiveImage
        src={src}
        webpSrc={webpSrc}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded && !imageError ? 'opacity-100' : 'opacity-0'
        }`}
        priority={true}
        loading="eager"
        sizes="100vw"
        width={1920}
        height={1080}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageError(true)}
      />
    </div>
  );
}
