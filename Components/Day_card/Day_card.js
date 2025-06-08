import React, { useState } from "react";
import styles from "./Day_card.module.css";

export default function Day_Card({ img, id, onClick }) {
    const [isClicked, setIsClicked] = useState(false);

    const Days = {
        1: "Day 1",
        2: "Day 2",
        3: "Day 3",
    };

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150); // Reset after 150ms
        onClick(); // Trigger the onClick prop
    };

    return (
        <div 
            className={`${styles.overlayContainer} ${isClicked ? styles.active : ""}`}
            onClick={handleClick}
        >
            <img
                loading="lazy"
                src={img}
                className={styles.eventImage}
                alt="Event icon"
            />
            <div className={styles.textOverlay}>{Days[id] || "Event"}</div>
        </div>
    );
}