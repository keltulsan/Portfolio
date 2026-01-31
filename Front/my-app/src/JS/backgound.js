import { useEffect, useRef } from "react";

export function Background() {
    const particlesRef = useRef(null);

    useEffect(() => {
      const cleanup = InitBackground(particlesRef.current);
      return cleanup || (() => {});
    }, []);

    return (
        <div className="gradient-background">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="glow"></div>
            <div className="grid-overlay"></div>
            <div className="noise-overlay"></div>
            <div className="particles-container" ref={particlesRef}></div>
        </div>
    )
}

// Create particle effect
function InitBackground(particlesContainer) {
  if (typeof window === "undefined") return;
  if (!particlesContainer) return;

    const containerWidth = particlesContainer.offsetWidth;
    const containerHeight = particlesContainer.offsetHeight;

    const density = 0.0001; 
    const particleCount = Math.floor(containerWidth * containerHeight * density);

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }

   const handleMouseMove = (e) => onMouseMove(e, particlesContainer);
  document.addEventListener('mousemove', handleMouseMove);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    particlesContainer.innerHTML = '';
  };
};

function createParticle(particlesContainer) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size (small)
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Initial position
    resetParticle(particle);
    
    particlesContainer.appendChild(particle);
    
    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    
    return {
        x: posX,
        y: posY
    };
}

function animateParticle(particle) {
    // Initial position
    const pos = resetParticle(particle);
    
    // Random animation properties
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    // Animate with GSAP-like timing
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

// Mouse interaction
function onMouseMove(e, particlesContainer) {
  if (typeof document === "undefined") return;
  if (!particlesContainer) return;

    const rect = particlesContainer.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

  const particle = document.createElement('div');
  particle.className = 'particle';

  const size = Math.random() * 4 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${mouseX}%`;
  particle.style.top = `${mouseY}%`;
  particle.style.opacity = '0.6';

  particlesContainer.appendChild(particle);

  setTimeout(() => {
    particle.style.transition = 'all 2s ease-out';
    particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
    particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
    particle.style.opacity = '0';

    setTimeout(() => particle.remove(), 2000);
  }, 10);

  // Mouvement des sphères (optionnel)
  const spheres = typeof document !== "undefined" ? document.querySelectorAll('.gradient-sphere') : [];
  const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

  spheres.forEach(sphere => {
    sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
}