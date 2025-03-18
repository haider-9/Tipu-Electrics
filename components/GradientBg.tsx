"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GradientBg() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check for user's motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsReducedMotion(prefersReducedMotion);
    
    // Only render animations if visible in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target.classList.contains('gradient-container')) {
          document.documentElement.style.setProperty('--gradient-opacity', 
            entry.isIntersecting ? '1' : '0');
        }
      });
    });
    
    const container = document.querySelector('.gradient-container');
    if (container) observer.observe(container);
    
    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  // If user prefers reduced motion, render a static version
  if (isReducedMotion) {
    return (
      <div className="fixed inset-0 -z-50 bg-gray-900 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-emerald-400/15 to-amber-500/15 opacity-50 blur-xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-50 flex items-center justify-center overflow-hidden bg-gray-900 pointer-events-none gradient-container">
      {/* Reduced number of elements and simplified animations */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-700/20 blur-[120px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
      />

      {/* Simplified copper glow with less intense animation */}
      <div className="absolute w-[450px] h-[450px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
    </div>
  );
}
