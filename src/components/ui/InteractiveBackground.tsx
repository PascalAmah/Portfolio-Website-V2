import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    
    const particles: Particle[] = [];
    const properties = {
      bgColor: 'rgba(10, 10, 10, 1)',
      particleColor: 'rgba(255, 255, 255, 0.5)', // Faint white
      particleRadius: 1.5,
      particleCount: 60,
      lineLength: 150,
      lineColor: 'rgba(255, 209, 102, 0.05)', // Very faint accent yellow
    };

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    let isMouseMoving = false;

    class Particle {
      x: number;
      y: number;
      velocityX: number;
      velocityY: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 0.5;
        this.velocityY = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 0.5;
      }

      position() {
        // Bounce off edges
        if (this.x > w || this.x < 0) this.velocityX *= -1;
        if (this.y > h || this.y < 0) this.velocityY *= -1;
        
        this.x += this.velocityX;
        this.y += this.velocityY;

        // Mouse repulsion (subtle)
        if (isMouseMoving) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 200) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (200 - distance) / 200;
                const directionX = forceDirectionX * force * 1; // Push strength
                const directionY = forceDirectionY * force * 1;
                this.x -= directionX;
                this.y -= directionY;
            }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      // Responsive particle count
      const count = window.innerWidth < 768 ? 30 : 80;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      if (!ctx) return;
      let x1, y1, x2, y2, length, opacity;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          
          if (length < properties.lineLength) {
            opacity = 1 - length / properties.lineLength;
            ctx.lineWidth = 0.5;
            // Use faint accent color for connections
            ctx.strokeStyle = `rgba(255, 209, 102, ${opacity * 0.15})`; 
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      if (!ctx) return;
      // Clear with a slight trail effect? No, clean clear for performance.
      ctx.clearRect(0, 0, w, h); 
      
      // Re-draw background color if needed, but we are transparent
      // ctx.fillStyle = properties.bgColor;
      // ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        particles[i].position();
        particles[i].draw();
      }
      drawLines();
      animationFrameId = requestAnimationFrame(loop);
    };

    init();
    loop();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        isMouseMoving = true;
        // Reset interaction flag after inactivity to save calc
        clearTimeout((window as any).mouseTimeout);
        (window as any).mouseTimeout = setTimeout(() => { isMouseMoving = false }, 2000);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-0 opacity-60"
    />
  );
};

export default InteractiveBackground;