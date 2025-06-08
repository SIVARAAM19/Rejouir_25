import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react"; // Import the North-East Arrow Icon
import "./EventCard.css";

// 🖼 Import images directly
import adapt_tunesImg from "../Assets/event_posters_2/adapt tunes web.jpg";
import anime_quizImg from "../Assets/event_posters_2/anime quiz.jpg";
import art_with_comaliImg from "../Assets/event_posters_2/art with comali web.jpg";
import battle_of_bandsImg from "../Assets/event_posters_2/battle of bands.jpg";
import beast_games from "../Assets/event_posters_2/beast games.jpeg";
import bgmiImg from "../Assets/event_posters_2/bgmi web.jpg";
import carromImg from "../Assets/event_posters_2/carrom web.jpg";
import chessImg from "../Assets/event_posters_2/chess web.jpg";
import cinematic_scienceImg from "../Assets/event_posters_2/cinematic science web.jpg";
import cine_quizImg from "../Assets/event_posters_2/cinequiz web.jpg";
import connectionsImg from "../Assets/event_posters_2/connections web.jpg";
import cricket_quizImg from "../Assets/event_posters_2/cricket quiz web.jpg";
import eatathon_briyaniImg from "../Assets/event_posters_2/eatathon biriyani.jpg";
import eatathon_pani_pooriImg from "../Assets/event_posters_2/eatathon pani poori web.jpg";
import escape_from_azkabanImg from "../Assets/event_posters_2/escape from azkaban web.jpg";
import fifaImg from "../Assets/event_posters_2/fifa ps.jpg";
import free_fireImg from "../Assets/event_posters_2/freefire web.jpg";
import hitnwinImg from "../Assets/event_posters_2/hitnwin web.jpg";
import instrumental_soloImg from "../Assets/event_posters_2/instrumental solo web.jpg";
import ipl_auctionImg from "../Assets/event_posters_2/ipl auction web.jpg";
import logo_designImg from "../Assets/event_posters_2/logo design web.jpg";
import lyric_findingImg from "../Assets/event_posters_2/lyric finding web.jpg";
import maathi_yosiImg from "../Assets/event_posters_2/maathi yosi.jpg";
import mandala_artImg from "../Assets/event_posters_2/mandala art web.jpg";
import marauders_adventureImg from "../Assets/event_posters_2/marauders adventure web.jpg";
import mehendiImg from "../Assets/event_posters_2/mehendi web.jpg";
import memeImg from "../Assets/event_posters_2/meme mania.jpg";
import murder_mysterryImg from "../Assets/event_posters_2/murder mystery web.jpg";
import photographyImg from "../Assets/event_posters_2/photography web.jpg";
import pot_pourriImg from "../Assets/event_posters_2/pot pourri web.jpg";
import pushupImg from "../Assets/event_posters_2/pushup web.jpg";
import series_quizImg from "../Assets/event_posters_2/series quiz.jpg";
import shipwreckImg from "../Assets/event_posters_2/shipwreck web.jpg";
import short_filmImg from "../Assets/event_posters_2/short film web.jpg";
import solo_dancingImg from "../Assets/event_posters_2/solo dancing web.jpg";
import solo_singingImg from "../Assets/event_posters_2/solo singing web.jpg";
import sports_quizImg from "../Assets/event_posters_2/sports quiz web.jpg";
import squidgameImg from "../Assets/event_posters_2/squidgame web.jpg";
import talent_huntImg from "../Assets/event_posters_2/talent hunt web.jpg";
import treasure_huntImg from "../Assets/event_posters_2/treasure hunt web.jpg";
import tune_findingImg from "../Assets/event_posters_2/tunefinding web.jpg";
import valorantImg from "../Assets/event_posters_2/valorant web.jpg";
import variet_variety_groupImg from "../Assets/event_posters_2/variety variety group web.jpg";
import variet_variety_soloImg from "../Assets/event_posters_2/web variety variety solo.jpg";
import whats_the_climaxImg from "../Assets/event_posters_2/whats the climax web.jpg";
import fallbackImg from "../Assets/card-performing-arts.png";

// 🖼 Event Category Image Mapping
const Images = {
    "ADAPT TUNES": adapt_tunesImg,
    "ANIME QUIZ": anime_quizImg,
    "ART WITH COMALI": art_with_comaliImg,
    "BATTLE OF BANDS": battle_of_bandsImg,
    "BEAST GAMES":beast_games,
    "BGMI": bgmiImg,
    "CARROM": carromImg,
    "CHESS": chessImg,
    "CINE QUIZ": cine_quizImg,
    "CINEMATIC SCIENCE": cinematic_scienceImg,
    "CONNECTIONS": connectionsImg,
    "CRICKET QUIZ": cricket_quizImg,
    "EATATHON -BRIYANI": eatathon_briyaniImg,
    "EATATHON -PANI PURI": eatathon_pani_pooriImg,
    "ESCAPE FROM AZKABAN": escape_from_azkabanImg,
    "FIFA PS": fifaImg,
    "FREE FIRE": free_fireImg,
    "HIT N WIN": hitnwinImg,
    "INSTRUMENTAL SOLO": instrumental_soloImg,
    "IPL AUCTION": ipl_auctionImg,
    "LOGO DESIGN": logo_designImg,
    "LYRIC FINDING": lyric_findingImg,
    "MANDALA ART": mandala_artImg,
    "MATHI YOSI": maathi_yosiImg,
    "MEHENDI": mehendiImg,
    "MEMES MANIA": memeImg,
    "MURDER MYSTERY": murder_mysterryImg,
    "PHOTOGRAPHY": photographyImg,
    "POTPOURRI": pot_pourriImg,
    "PUSH UP": pushupImg,
    "SERIES QUIZ": series_quizImg,
    "SHIP WRECK": shipwreckImg,
    "SHORT FILM": short_filmImg,
    "SOLO DANCING": solo_dancingImg,
    "SOLO SINGING": solo_singingImg,
    "SPORTS QUIZ": sports_quizImg,
    "SQUID GAME- UNLEASHED": squidgameImg,
    "TALENT HUNT": talent_huntImg,
    "THE MARAUDERS ADVENTURE": marauders_adventureImg,
    "TREASURE HUNT": treasure_huntImg,
    "TUNE FINDING": tune_findingImg,
    "VALORANT": valorantImg,
    "VARIETY VARIETY GROUP": variet_variety_groupImg,
    "VARIETY VARIETY SOLO": variet_variety_soloImg,
    "WHAT'S THE CLIMAX": whats_the_climaxImg
};

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    
    // Ensure a valid category image, fallback to a default image or placeholder
    const eventImage = Images[event.EventName] || fallbackImg; 

    const [isClicked, setIsClicked] = useState(false);

    // Handle click animation for mobile users
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            navigate(`/event/${event.id}`);
        }, 200); // Small delay to show animation
    };

    return (
      <div 
            className={`wizard-card ${isClicked ? "clicked" : ""}`} 
            onClick={handleClick}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/event/${event.id}`)}
            tabIndex={0} 
            role="button" 
            aria-label={`View details for ${event.EventName}`}
      >
      <div className="card-container">
        <div className="card-inner">
          <div className="card-front">
            <div className="magic-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="particle" style={{
                  '--delay': `${Math.random() * 2}s`,
                  '--size': `${Math.random() * 6 + 4}px`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                }}></div>
              ))}
            </div>

            <div className="image-container">
            {eventImage && <img src={eventImage} alt={event.Category || "Event"} className="character-image" />}
              <div className="image-shine"></div>
            </div>

            <div className="title-container">
              <h3 className="character-title">{event.EventName}</h3>
              <div className="title-underline"></div>
            </div>

            <div className="magic-circle"></div>
            <div className="corner-decoration tl"></div>
            <div className="corner-decoration tr"></div>
            <div className="corner-decoration bl"></div>
            <div className="corner-decoration br"></div>
          </div>
          
        </div>
      </div>

      <div className="card-shadow"></div>
    </div>
  );
};

export default EventCard;