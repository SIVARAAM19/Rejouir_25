import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import mountain from '../../Assets/mountain.png';
import moon from '../../Assets/moon.png';
import castle from '../../Assets/castle.png';
import bush from '../../Assets/bush.png';


import styles from './Section_1.module.css';

const Section_1 = () => {
    const [{ scrollY }, setScrollY] = useSpring(() => ({ scrollY: 0 }));

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => setScrollY({ scrollY: window.scrollY });
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setScrollY]);



    // Handle screen resize and update timer background
    useEffect(() => {
       

        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        updateScreenWidth();
     
        window.addEventListener('resize', updateScreenWidth);
        return () => {
          
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

 

    return (
        <div>
            <section className='section-one'>
                <animated.img
                    src={moon}
                    id="moon"
                    alt="Moon"
                    style={{
                        position: 'absolute',
                        top: scrollY.to(y => `${10 + y * 0.1}%`),
                        left: scrollY.to(y => `${10 - y * 0.05}%`),
                        width: '250px',
                        height: '250px',
                        zIndex: 1,
                        marginTop: scrollY.to(y => y * 0.5),
                        transform: scrollY.to(y => `scale(${1 + y * 0.001}) rotate(${-y * 0.1}deg)`),
                    }}
                />

                <animated.img
                    src={mountain}
                    id="mountain"
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        marginTop: scrollY.to(y => y * 0.3)
                    }}
                />

                <animated.img
                    src={castle}
                    id="castle"
                    alt="Castle"
                    className={styles.castle}
                    style={{
                        position: 'absolute',
                        zIndex: 3,
                        marginTop: scrollY.to(y => y * 0.2)
                    }}
                />

                <animated.img
                    src={bush}
                    id="bush"
                    alt="Bush"
                    style={{
                        zIndex: 5,
                        position: 'absolute',
                        bottom: 0
                    }}
                />


                 {/* Title */}
            <animated.h2 
            className={styles.title} 
            style={{
              position: 'absolute', // Ensure title is positioned absolutely
              zIndex: 4, // Title above the mountain
              marginBottom: scrollY.to(y => `${150 - y * 1}px`),
              // opacity: scrollY.to(y => (y > 200 ? 0 : 1)) 
            }}
          >
           REJOUIR<br />2025
          </animated.h2>




            </section>
        </div>
    );
};

export default Section_1;