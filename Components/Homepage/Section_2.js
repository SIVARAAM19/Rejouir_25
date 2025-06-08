import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useScroll } from '@react-spring/web';
import styles from './Section_2.module.css';

const Section_2 = () => {
  const { scrollYProgress } = useScroll();

  const headingAnimation = useSpring({
    opacity: scrollYProgress.to([0, 0.1], [0, 1]),
    transform: scrollYProgress.to((val) => `translateY(${val * 50}px)`),
  });

  const paragraphAnimation = useSpring({
    opacity: scrollYProgress.to([0, 0.1], [0, 1]),
    transform: scrollYProgress.to((val) => `translateY(${val * 30}px)`),
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
         {/* Animated Heading */}
         <animated.h2 className={styles.heading} style={headingAnimation}>
          Welcome to Rejouir 2025
        </animated.h2>

        {/* Animated Paragraphs */}
        <animated.p className={styles.paragraph} style={paragraphAnimation}>
        Réjouir - the annual cultural festival of Puducherry Technological University (PTU), formerly PECOFES at PEC, is a grand celebration of art, culture, and talent, uniting students for an unforgettable experience.
        </animated.p>
        <animated.p className={styles.paragraph} style={paragraphAnimation}>
        The multi-day fest features electrifying dance performances, soulful music, literary contests, and fine arts exhibitions, fostering creativity, camaraderie, and competition. Beyond competitions, Réjouir hosts live concerts, DJ nights, and celebrity appearances, making every moment thrilling. Over the years, it has welcomed renowned artists and industry icons who inspire and mesmerize audiences.
        </animated.p>
        <animated.p className={styles.paragraph} style={paragraphAnimation}>
        Réjouir isn’t just a festival—it’s a cultural phenomenon where memories are made, friendships flourish, and creativity thrives. Be part of the magic!
        </animated.p>

        {/* Open another project running on a different port */}
        <a href="http://gallery.rejouir.in" target="_blank" rel="noopener noreferrer" class="readMoreButton">
          <div class="book">
            <div class="inner">
            <div class="left"></div>
            <div class="middle"></div>
            <div class="right"></div>
          </div>
        </div>
          <span>See the magic</span>
        </a>
      </div>
    </section>
  );
};

export default Section_2;