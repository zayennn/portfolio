import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0, 
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0 
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0
      );
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor='hover']");
      if (target) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("[data-cursor='hover']");
      if (target) {
        setIsHovering(false);
      }
    };

    // Only add mouse events if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <div className="cursor">
      {/* Big ball cursor */}
      <motion.div 
        className="cursor__ball cursor__ball--big"
        initial={{ scale: 1 }}
        animate={{ 
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
          scale: isHovering ? 4 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.3,
          scale: {
            type: "spring",
            stiffness: 200,
            damping: 15
          }
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          mixBlendMode: "difference",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </motion.div>

      {/* Small ball cursor */}
      <motion.div 
        className="cursor__ball cursor__ball--small"
        animate={{ 
          x: mousePosition.x - 5,
          y: mousePosition.y - 7
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 10,
          mass: 0.2
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          mixBlendMode: "difference",
          zIndex: 1001,
          pointerEvents: "none",
        }}
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </motion.div>
    </div>
  );
};

export default CursorAnimation;