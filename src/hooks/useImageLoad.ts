import { useState, useEffect } from 'react';
import { OptimizedImage, getBestImageFormat } from '../utils/imageOptimization';

interface UseImageLoadOptions {
  priority?: boolean;
  preload?: boolean;
}

interface UseImageLoadReturn {
  src: string;
  isLoading: boolean;
  isLoaded: boolean;
  hasError: boolean;
  retry: () => void;
}

/**
 * Hook for managing optimized image loading with format detection
 */
export function useImageLoad(
  image: OptimizedImage,
  options: UseImageLoadOptions = {}
): UseImageLoadReturn {
  const { priority = false, preload = false } = options;
  
  const [src, setSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadImage = async () => {
    setIsLoading(true);
    setHasError(false);
    setIsLoaded(false);

    try {
      const bestFormat = await getBestImageFormat(image);
      setSrc(bestFormat);
      
      // Preload if requested
      if (preload || priority) {
        const img = new Image();
        img.onload = () => {
          setIsLoaded(true);
          setIsLoading(false);
        };
        img.onerror = () => {
          // Fallback to original format
          if (bestFormat !== image.src) {
            setSrc(image.src);
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        };
        img.src = bestFormat;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setSrc(image.src);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadImage();
  }, [image.src]);

  const retry = () => {
    loadImage();
  };

  return {
    src,
    isLoading,
    isLoaded,
    hasError,
    retry,
  };
}