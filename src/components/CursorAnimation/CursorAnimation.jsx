import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorAnimation = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Config - Bisa disesuaikan sesuai preferensi
  const config = {
    // Big ball spring config (main config untuk kecepatan)
    bigBall: {
      stiffness: 10000,    // Semakin tinggi = semakin cepat (default: 100)
      damping: 15,       // Semakin rendah = semakin sedikit bounce (default: 20)
      mass: 0.3,         // Semakin rendah = semakin ringan (default: 0.5)
    },
    // Small ball spring config (supaya instant)
    smallBall: {
      stiffness: 1500,   // Sangat tinggi = instant
      damping: 20,
      mass: 0.02,
    },
    // Scale animation config
    scale: {
      stiffness: 300,
      damping: 15,
    }
  };

  // Motion values untuk cursor positions
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smallBallX = useMotionValue(0);
  const smallBallY = useMotionValue(0);
  
  // Spring untuk big ball
  const bigBallX = useSpring(cursorX, config.bigBall);
  const bigBallY = useSpring(cursorY, config.bigBall);

  // Spring untuk small ball
  const smallBallSpringX = useSpring(smallBallX, config.smallBall);
  const smallBallSpringY = useSpring(smallBallY, config.smallBall);

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
      cursorX.set(e.clientX - 15);
      cursorY.set(e.clientY - 15);
      smallBallX.set(e.clientX - 5);
      smallBallY.set(e.clientY - 7);
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

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("mouseout", handleMouseOut);
      
      // Set initial position
      const initialX = window.innerWidth / 2;
      const initialY = window.innerHeight / 2;
      cursorX.set(initialX - 15);
      cursorY.set(initialY - 15);
      smallBallX.set(initialX - 5);
      smallBallY.set(initialY - 7);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile, cursorX, cursorY, smallBallX, smallBallY]);

  if (isMobile) return null;

  return (
    <div className="cursor">
      {/* Small ball cursor */}
      <motion.div 
        className="cursor__ball cursor__ball--small"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: smallBallSpringX,
          y: smallBallSpringY,
          mixBlendMode: "difference",
          zIndex: 1001,
          pointerEvents: "none",
        }}
      >
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </motion.div>

      {/* Big ball cursor */}
      <motion.div 
        className="cursor__ball cursor__ball--big"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: bigBallX,
          y: bigBallY,
          scale: isHovering ? 4 : 1,
          mixBlendMode: "difference",
          zIndex: 1000,
          pointerEvents: "none",
        }}
        transition={{
          scale: config.scale
        }}
      >
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0" fill="#f7f8fa" />
        </svg>
      </motion.div>
    </div>
  );
};

export default CursorAnimation;