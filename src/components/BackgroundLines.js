import React, { useEffect, useRef } from 'react';
import './BackgroundLines.css';

const BackgroundLines = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;
      
      requestAnimationFrame(() => {
        container.style.setProperty('--mouse-x', `${x}px`);
        container.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="background-lines" ref={containerRef}>
      <div className="grid-container">
        {[...Array(15)].map((_, index) => (
          <div key={`h-${index}`} className="line horizontal"></div>
        ))}
        {[...Array(20)].map((_, index) => (
          <div key={`v-${index}`} className="line vertical"></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;
