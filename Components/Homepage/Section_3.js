import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Section_3.module.css';
import Day_Card from '../Day_card/Day_card.js';
import d1Img from '../../Assets/Day_1.jpg';
import d2Img from '../../Assets/Day_2.jpg';
import d3Img from '../../Assets/Day_3.jpg';

const Section_3 = () => {
  const navigate = useNavigate();

  const eventCards = [
    { id: 1, img: d1Img },
    { id: 2, img: d2Img },
    { id: 3, img: d3Img },
  ];

  const handleDayClick = (day) => {
    navigate(`/EventsHub?day=${day}`);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.dayContainer}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <h1 className={styles.title}>EVENTS HUB</h1>
            <p className={styles.subtitle}>
            Join the Moment – Register Now!
            </p>
          </header>
          <div className={styles.cardsContainer}>
            {eventCards.map(({ id, img }) => (
              <Day_Card key={id} id={id} img={img} onClick={() => handleDayClick(id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;