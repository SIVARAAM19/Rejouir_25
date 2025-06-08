import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "@react-spring/web";
import styles from "./Section_4.module.css";
import tshirt1 from "../../Assets/tshirt1.png";
import tshirt2 from "../../Assets/tshirt2.png";

const Section_4 = () => {
  const { scrollYProgress } = useScroll();
  const [currentVariant, setCurrentVariant] = useState(0);
  const tshirtVariants = [tshirt1, tshirt2];

  const leftAnimation = useSpring({
    opacity: scrollYProgress.to([0.2, 0.4], [0, 1]),
    transform: scrollYProgress.to((val) => `translateY(${val * 30}px)`),
  });

  const rightAnimation = useSpring({
    opacity: scrollYProgress.to([0.2, 0.4], [0, 1]),
    transform: scrollYProgress.to((val) => `translateY(${val * 30}px)`),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariant((prevVariant) => (prevVariant + 1) % tshirtVariants.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleBookNowClick = () => {
    window.open("https://forms.gle/Hp7z6pmWPsZkLyEU6", "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <animated.div className={styles.details} style={leftAnimation}>
          <h2 className={styles.heading}>Exclusive Rejouir '25 Merchandise</h2>
          <p className={styles.description}>
            Wear the magic with our limited-edition Rejouir '25 Merchandise.
            Available in all sizes!
          </p>

          {/* Buy Now Button */}
          <button className={styles.fancyButton} onClick={handleBookNowClick}>
            <svg className={styles.buttonSvg} width="200" height="50" viewBox="0 0 300 80">
              <rect
                className={`${styles.buttonLine} ${styles.buttonLineOuter}`}
                strokeWidth="8"
                stroke="#EBC445"
                strokeLinecap="round"
                fill="none"
                x="4"
                y="4"
                width="292"
                height="72"
                rx="36"
              />
              <rect
                className={`${styles.buttonLine} ${styles.buttonLineInner}`}
                strokeWidth="4"
                stroke="#D9823B"
                strokeLinecap="round"
                fill="none"
                x="4"
                y="4"
                width="292"
                height="72"
                rx="36"
              />
            </svg>
            <div className={styles.buttonContent}>BOOK NOW</div>
          </button>
        </animated.div>

        {/* Right Side - T-Shirt Image */}
        <animated.div className={styles.imageContainer} style={rightAnimation}>
          <img
            src={tshirtVariants[currentVariant]}
            alt="T-Shirt"
            className={styles.merchImage}
          />
        </animated.div>
      </div>
    </section>
  );
};

export default Section_4;
