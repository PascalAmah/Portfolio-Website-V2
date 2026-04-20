/**
 * Image optimization utilities for the portfolio
 * Handles lazy loading, format optimization, and blur placeholders
 */

export interface OptimizedImage {
  src: string;
  webp?: string;
  avif?: string;
  placeholder: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Creates a blur placeholder from an image
 * This is a simple base64 encoded SVG blur placeholder
 */
export function createBlurPlaceholder(width: number, height: number): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1f2937;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#374151;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Professional photo asset configuration
 */
export const professionalPhoto: OptimizedImage = {
  src: '/assets/images/pascal-professional.jpg',
  webp: '/assets/images/pascal-professional.webp',
  avif: '/assets/images/pascal-professional.avif',
  placeholder: createBlurPlaceholder(400, 400),
  alt: 'Pascal Amaliri - Professional headshot',
  width: 400,
  height: 400,
};

/**
 * Checks if WebP format is supported by the browser
 */
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

/**
 * Checks if AVIF format is supported by the browser
 */
export function supportsAVIF(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=';
  });
}

/**
 * Gets the best supported image format for the current browser
 */
export async function getBestImageFormat(image: OptimizedImage): Promise<string> {
  if (image.avif && await supportsAVIF()) {
    return image.avif;
  }
  if (image.webp && await supportsWebP()) {
    return image.webp;
  }
  return image.src;
}