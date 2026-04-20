import React from 'react';
import { LazyImage } from '../src/components/ui/LazyImage';
import { professionalPhoto } from '../src/utils/imageOptimization';
import { useImageLoad } from '../src/hooks/useImageLoad';

/**
 * Example component demonstrating image optimization usage
 * This shows how to integrate the professional photo with lazy loading
 */
export const ImageOptimizationExample: React.FC = () => {
  // Example 1: Using LazyImage component (recommended)
  const handleImageLoad = () => {
    console.log('Professional photo loaded successfully');
  };

  const handleImageError = () => {
    console.error('Failed to load professional photo');
  };

  // Example 2: Using the useImageLoad hook for custom implementations
  const { src, isLoading, isLoaded, hasError, retry } = useImageLoad(
    professionalPhoto,
    { priority: true, preload: true }
  );

  return (
    <div className="space-y-8 p-8">
      <h2 className="text-2xl font-bold text-white">Image Optimization Examples</h2>
      
      {/* Example 1: LazyImage Component */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-300">1. LazyImage Component</h3>
        <div className="w-64 h-64">
          <LazyImage
            image={professionalPhoto}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            priority={true}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>

      {/* Example 2: Custom Hook Usage */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-300">2. Custom Hook Implementation</h3>
        <div className="w-64 h-64 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-2xl">
              <p className="text-red-400 mb-2">Failed to load</p>
              <button 
                onClick={retry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Retry
              </button>
            </div>
          )}
          
          {src && (
            <img
              src={src}
              alt={professionalPhoto.alt}
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-50'
              }`}
            />
          )}
        </div>
      </div>

      {/* Example 3: Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-300">3. Responsive Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Small */}
          <div className="w-24 h-24">
            <LazyImage
              image={professionalPhoto}
              className="rounded-lg shadow-md"
              sizes="96px"
            />
          </div>
          
          {/* Medium */}
          <div className="w-32 h-32">
            <LazyImage
              image={professionalPhoto}
              className="rounded-xl shadow-lg"
              sizes="128px"
            />
          </div>
          
          {/* Large */}
          <div className="w-48 h-48">
            <LazyImage
              image={professionalPhoto}
              className="rounded-2xl shadow-xl"
              sizes="192px"
            />
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-300 mb-4">Usage Instructions</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p>1. Add professional photo files to <code>/public/assets/images/</code></p>
          <p>2. Files needed: pascal-professional.jpg, pascal-professional.webp, pascal-professional.avif</p>
          <p>3. Use <code>&lt;LazyImage&gt;</code> component for automatic optimization</p>
          <p>4. Set <code>priority=true</code> for above-the-fold images</p>
          <p>5. The system automatically detects best format (AVIF → WebP → JPEG)</p>
        </div>
      </div>
    </div>
  );
};