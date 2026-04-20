import React from "react";

interface ProfessionalPhotoProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  showStatus?: boolean;
  className?: string;
}

const ProfessionalPhoto: React.FC<ProfessionalPhotoProps> = ({
  src,
  alt,
  size = "medium",
  showStatus = true,
  className = "",
}) => {
  // Size configurations
  const sizeClasses = {
    small: "w-24 h-32 md:w-32 md:h-40",
    medium: "w-full h-full min-h-[300px] md:min-h-[400px]",
    large: "w-full h-full min-h-[400px] md:min-h-[500px]",
  };

  const containerClasses = {
    small: "rounded-2xl",
    medium: "rounded-3xl",
    large: "rounded-3xl",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        ${containerClasses[size]} 
        overflow-hidden 
        relative 
        group 
        border 
        border-white/5 
        bg-surface
        hover:border-white/10
        transition-all 
        duration-500
        ${className}
      `}
    >
      {/* Professional Photo */}
      <img
        src={src}
        alt={alt}
        className="
          w-full 
          h-full 
          object-cover 
          opacity-60 
          grayscale 
          group-hover:grayscale-0 
          group-hover:opacity-100 
          transition-all 
          duration-500
          group-hover:scale-105
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
        absolute 
        inset-0 
        bg-gradient-to-t 
        from-black/90 
        via-black/20 
        to-transparent
        group-hover:from-black/70
        transition-all
        duration-500
      "
      />

      {/* Status Badge */}
      {showStatus && (
        <div
          className="
          absolute 
          bottom-4 
          left-4 
          right-4
          flex
          justify-start
        "
        >
          <div
            className="
            inline-flex 
            items-center 
            px-3 
            py-1.5 
            rounded-full 
            bg-green-500/20 
            border 
            border-green-500/30 
            backdrop-blur-sm
            hover:bg-green-500/30
            hover:border-green-500/50
            transition-all
            duration-300
            group-hover:scale-105
          "
          >
            <div
              className="
              w-1.5 
              h-1.5 
              rounded-full 
              bg-green-500 
              animate-pulse 
              mr-2
            "
            />
            <span
              className="
              text-[10px] 
              font-mono 
              uppercase 
              tracking-wider 
              text-green-400
              font-medium
            "
            >
              Open to work
            </span>
          </div>
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div
        className="
        absolute 
        inset-0 
        bg-gradient-to-br 
        from-white/5 
        to-transparent 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        duration-500
        pointer-events-none
      "
      />
    </div>
  );
};

export default ProfessionalPhoto;
