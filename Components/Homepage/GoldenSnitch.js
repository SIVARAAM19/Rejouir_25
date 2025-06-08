import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./GoldenSnitch.module.css";
import golden_snitch from "../../Assets/golden-snitch.png";

const getRandomPosition = () => {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;
  return {
    x: Math.random() * maxX - maxX / 2,
    y: Math.random() * maxY - maxY / 2,
  };
};

const GoldenSnitch = () => {
  const [size, setSize] = useState(window.innerWidth < 768 ? 40 : 60);
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth < 768 ? 40 : 60);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to update position
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
    }, Math.random() * 3000 + 2000); // Changes position every 2-5s
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      src={golden_snitch}
      alt="Golden Snitch"
      className={styles.snitch}
      animate={{
        x: position.x,
        y: position.y,
        rotate: [0, 20, -20, 20, -20, 0], // Flapping animation
      }}
      transition={{
        x: { duration: 1, ease: "easeInOut" },
        y: { duration: 1, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 0.2, ease: "easeInOut" }, // Flapping continues
      }}
      style={{
        width: `${size}px`,
        height: "auto",
        position: "fixed",
        top: "50%",
        left: "50%",
      }}
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setPosition(getRandomPosition())} // Clicking changes direction
      onClick={() => setPosition(getRandomPosition())} // Clicking changes direction
    />
  );
};

export default GoldenSnitch;
