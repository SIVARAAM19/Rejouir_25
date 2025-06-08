import React, { useState, useEffect } from "react";
import styles from "./MagicCursor.module.css";
import wandImage from "../../Assets/wand.png"; // Wand image
import sparkleImage from "../../Assets/sparkle.png"; // Sparkle image

const MagicCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the user is on a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    const handleMouseMove = (e) => {
      if (isTouchDevice) return; // Don't show wand on touch devices
      setCursorPos({ x: e.clientX, y: e.clientY });
      addSparkle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      addSparkle(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, [isTouchDevice]);

  const addSparkle = (x, y) => {
    setSparkles((prev) => [
      ...prev,
      {
        id: Math.random(),
        x: x + Math.random() * 30 - 15,
        y: y + Math.random() * 30 - 15,
        size: Math.random() * 25 + 10,
      },
    ]);

    setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 400);
  };

  return (
    <>
      {/*{!isTouchDevice && (
        <img
          src={wandImage}
          alt="Magic Wand"
          className={styles.wand}
          style={{
            left: `${cursorPos.x - 40}px`,
            top: `${cursorPos.y + 15}px`,
            transform: "rotate(-30deg)",
          }}
        />
      )}*/}

      {/* ✨ Sparkle Effect */}
      {sparkles.map((sparkle) => (
        <img
          key={sparkle.id}
          src={sparkleImage}
          alt="Sparkle"
          className={styles.sparkle}
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
        />
      ))}
    </>
  );
};

export default MagicCursor;
