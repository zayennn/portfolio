import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorAnimation = () => {
  const [cursorPos, setCursorPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isHovering, setIsHovering] = useState(false);

  const followerX = useSpring(cursorPos.x, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const followerY = useSpring(cursorPos.y, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  useEffect(() => {
    const handleMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
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

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: cursorPos.x - 6,
          y: cursorPos.y - 6,
          width: isHovering ? 18 : 12,
          height: isHovering ? 18 : 12,
          borderRadius: "50%",
          backgroundColor: "#000",
          pointerEvents: "none",
          zIndex: 2000,
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />

      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: followerX - (isHovering ? 22 : 18),
          y: followerY - (isHovering ? 22 : 18),
          width: isHovering ? 44 : 36,
          height: isHovering ? 44 : 36,
          borderRadius: "50%",
          border: "2px solid #000",
          pointerEvents: "none",
          zIndex: 1999,
          mixBlendMode: isHovering ? "difference" : "normal",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
};

export default CursorAnimation;


