import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import useReducedMotion from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // How strong the pull is (default 0.3)
  radius?: number; // Magnetic attraction radius in pixels (default 100)
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "", 
  strength = 0.3,
  radius = 100,
  onClick 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const cursor = cursorRef.current;
    if (!button || !text) return;

    // If user prefers reduced motion, disable animations
    if (prefersReducedMotion) {
      return;
    }

    // Enhanced easing for smoother, more natural movement
    const buttonEase = "power3.out";
    const textEase = "power2.out";
    const cursorEase = "power2.out";

    const xTo = gsap.quickTo(button, "x", { duration: 0.6, ease: buttonEase });
    const yTo = gsap.quickTo(button, "y", { duration: 0.6, ease: buttonEase });
    
    const textXTo = gsap.quickTo(text, "x", { duration: 0.5, ease: textEase });
    const textYTo = gsap.quickTo(text, "y", { duration: 0.5, ease: textEase });

    let cursorXTo: gsap.QuickToFunc | null = null;
    let cursorYTo: gsap.QuickToFunc | null = null;

    if (cursor) {
      cursorXTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: cursorEase });
      cursorYTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: cursorEase });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate distance from center
      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Only apply magnetic effect within radius
      if (distance < radius) {
        // Calculate magnetic strength based on distance (closer = stronger)
        const magneticStrength = 1 - (distance / radius);
        const adjustedStrength = strength * magneticStrength;

        // Move button with magnetic effect
        xTo(deltaX * adjustedStrength);
        yTo(deltaY * adjustedStrength);

        // Move text with enhanced parallax effect
        textXTo(deltaX * (adjustedStrength * 1.3));
        textYTo(deltaY * (adjustedStrength * 1.3));

        // Update cursor follower position
        if (cursor && cursorXTo && cursorYTo) {
          cursorXTo(deltaX * 0.15);
          cursorYTo(deltaY * 0.15);
        }
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      // Scale up slightly on hover
      gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset all positions and scale
      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
      
      if (cursor && cursorXTo && cursorYTo) {
        cursorXTo(0);
        cursorYTo(0);
      }

      gsap.to(button, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, radius, prefersReducedMotion]);

  return (
    <button 
        ref={buttonRef} 
        className={`${className} relative`} 
        onClick={onClick}
    >
        <span ref={textRef} className="inline-block pointer-events-none">
            {children}
        </span>
        
        {/* Cursor follower - only visible on hover and when motion is enabled */}
        {!prefersReducedMotion && (
          <div 
            ref={cursorRef}
            className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 ${
              isHovering ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
        )}
    </button>
  );
};

export default MagneticButton;