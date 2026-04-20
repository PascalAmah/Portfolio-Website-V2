import React from 'react';
import ProfessionalPhoto from '../src/components/ProfessionalPhoto';

/**
 * Example usage of the ProfessionalPhoto component
 * This demonstrates all the different sizes and configurations
 */
const ProfessionalPhotoExample: React.FC = () => {
  return (
    <div className="p-8 bg-black min-h-screen">
      <h1 className="text-white text-2xl mb-8">ProfessionalPhoto Component Examples</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Small Size */}
        <div>
          <h2 className="text-white text-lg mb-4">Small Size</h2>
          <ProfessionalPhoto 
            src="https://picsum.photos/id/1005/600/800?grayscale" 
            alt="Pascal Amaliri - Small"
            size="small"
            showStatus={true}
          />
        </div>

        {/* Medium Size */}
        <div>
          <h2 className="text-white text-lg mb-4">Medium Size</h2>
          <div className="h-96">
            <ProfessionalPhoto 
              src="https://picsum.photos/id/1005/600/800?grayscale" 
              alt="Pascal Amaliri - Medium"
              size="medium"
              showStatus={true}
            />
          </div>
        </div>

        {/* Large Size */}
        <div>
          <h2 className="text-white text-lg mb-4">Large Size</h2>
          <div className="h-96">
            <ProfessionalPhoto 
              src="https://picsum.photos/id/1005/600/800?grayscale" 
              alt="Pascal Amaliri - Large"
              size="large"
              showStatus={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-white text-lg mb-4">Without Status Badge</h2>
        <div className="w-64 h-80">
          <ProfessionalPhoto 
            src="https://picsum.photos/id/1005/600/800?grayscale" 
            alt="Pascal Amaliri - No Status"
            size="medium"
            showStatus={false}
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-white text-lg mb-4">Custom Styling</h2>
        <div className="w-64 h-80">
          <ProfessionalPhoto 
            src="https://picsum.photos/id/1005/600/800?grayscale" 
            alt="Pascal Amaliri - Custom"
            size="medium"
            showStatus={true}
            className="shadow-2xl shadow-blue-500/20"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalPhotoExample;