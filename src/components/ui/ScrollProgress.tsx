import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      // Prevent division by zero
      if (totalHeight > 0) {
        const percentage = (scrollPosition / totalHeight) * 100;
        setWidth(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-accent transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,209,102,0.5)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ScrollProgress;