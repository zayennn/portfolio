import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorAnimation = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Motion values untuk spring animation
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring untuk border (lebih lambat, ada delay)
  const borderX = useSpring(cursorX, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });
  
  const borderY = useSpring(cursorY, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });
  
  // Spring untuk cursor dot (lebih cepat)
  const dotX = useSpring(cursorX, {
    stiffness: 700,
    damping: 30,
    mass: 0.1,
  });
  
  const dotY = useSpring(cursorY, {
    stiffness: 700,
    damping: 30,
    mass: 0.1,
  });

  useEffect(() => {
    // Update motion values ketika cursorPos berubah
    cursorX.set(cursorPos.x);
    cursorY.set(cursorPos.y);
  }, [cursorPos, cursorX, cursorY]);

  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (typeof window.DocumentTouch !== "undefined" && document instanceof window.DocumentTouch);
      
      const isSmallScreen = window.innerWidth <= 768;
      
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Set posisi awal ke tengah layar
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    setCursorPos({ x: initialX, y: initialY });
    cursorX.set(initialX);
    cursorY.set(initialY);

    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor='hover']");
      const isClickable = e.target.closest("a, button, [role='button'], input, textarea");
      
      if (target || isClickable) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("[data-cursor='hover']");
      const isClickable = e.target.closest("a, button, [role='button'], input, textarea");
      
      if (target || isClickable) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      // Efek klik (sedikit mengecil)
      document.documentElement.style.setProperty('--cursor-scale', '0.9');
    };

    const handleMouseUp = () => {
      // Reset efek klik
      document.documentElement.style.setProperty('--cursor-scale', '1');
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot (hitam di tengah border) */}
      <motion.div
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: isHovering ? 24 : 10,
          height: isHovering ? 24 : 10,
          borderRadius: "50%",
          backgroundColor: "#000000",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%) scale(var(--cursor-scale, 1))",
          transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease",
        }}
      />

      {/* Border cursor dengan delay */}
      <motion.div
        className="cursor-border"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: borderX,
          y: borderY,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderRadius: "50%",
          border: "2px solid #000000",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "normal",
          transform: "translate(-50%, -50%) scale(var(--cursor-scale, 1))",
          transition: "width 0.3s ease-out, height 0.3s ease-out, border-color 0.2s ease",
          borderColor: isHovering ? "#000000" : "#000000",
          backgroundColor: "transparent",
          opacity: 0.8,
        }}
      />

    </>
  );
};

export default CursorAnimation;