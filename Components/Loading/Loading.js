import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Loading.module.css";

export default function Loading() {
  const shineRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const animateShine = () => {
      shineRefs.current.forEach((shine) => {
        if (shine) {
          shine.style.transition = "none";
          shine.style.transform = "translate(-100%, 100%) rotate(-45deg)";
  
          setTimeout(() => {
            shine.style.transition = "transform 1.5s ease-in-out infinite";
            shine.style.transform = "translate(100%, -100%) rotate(-45deg)";
          }, 50);
        }
      });
    };
  
    animateShine();
  
    const interval = setInterval(animateShine, 1000);
  
    const timeout = setTimeout(() => {
      clearInterval(interval); // Ensures no conflicts before navigating
      navigate(-1);
    }, 5000);
  
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);
  
  return (
    <div className={styles.container}>
      <div className={`${styles.show} ${styles.pulseEffect}`}>
        <div className={styles.scar}></div>
        <div className={`${styles.scar} ${styles.partTwo}`}></div>
        <div className={styles.glassesOne}>
          <div
            className={`${styles.shine} ${styles.shineLoop}`}
            ref={(el) => (shineRefs.current[0] = el)}
          ></div>
        </div>
        <div className={styles.bridge}></div>
        <div className={styles.glassesTwo}>
          <div
            className={`${styles.shine} ${styles.shineLoop}`}
            ref={(el) => (shineRefs.current[1] = el)}
          ></div>
        </div>
      </div>
    </div>
  );
}