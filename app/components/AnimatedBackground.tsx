'use client';

import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const container = document.getElementById('animated-bg');
    if (!container) return;

    const numCircles = 15;
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.className = 'circle';
      const size = Math.random() * 100 + 50;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.top = `${Math.random() * 100}%`;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.animationDuration = `${Math.random() * 20 + 10}s`;
      container.appendChild(circle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div id="animated-bg" className="animated-bg"></div>;
};

export default AnimatedBackground;
