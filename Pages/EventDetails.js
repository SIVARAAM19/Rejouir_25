import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";
import castle from '../Assets/day2.jpg';
import parchment from '../Assets/parchment.png';
import waxSeal from '../Assets/wax-seal.png';
import pdf from '../Assets/PDF/Terms_and_conditions.pdf'

// Import the JSON data
import eventsData from "../json/events.json";

// Import images directly
import adapt_tunesImg from "../Assets/event_posters/adapt tunes web.jpg";
import anime_quizImg from "../Assets/event_posters/anime quiz.jpg";
import art_with_comaliImg from "../Assets/event_posters/art with comali web.jpg";
import battle_of_bandsImg from "../Assets/event_posters/battle of bands.jpg";
import beast_games from "../Assets/event_posters/beast games.jpeg";
import bgmiImg from "../Assets/event_posters/bgmi web.jpg";
import carromImg from "../Assets/event_posters/carrom web.jpg";
import chessImg from "../Assets/event_posters/chess web.jpg";
import cinematic_scienceImg from "../Assets/event_posters/cinematic science web.jpg";
import cine_quizImg from "../Assets/event_posters/cinequiz web.jpg";
import connectionsImg from "../Assets/event_posters/connections web.jpg";
import cricket_quizImg from "../Assets/event_posters/cricket quiz web.jpg";
import eatathon_briyaniImg from "../Assets/event_posters/eatathon biriyani.jpg";
import eatathon_pani_pooriImg from "../Assets/event_posters/eatathon pani poori web.jpg";
import escape_from_azkabanImg from "../Assets/event_posters/escape from azkaban web.jpg";
import fifaImg from "../Assets/event_posters/fifa ps.jpg";
import free_fireImg from "../Assets/event_posters/freefire web.jpg";
import hitnwinImg from "../Assets/event_posters/hitnwin web.jpg";
import instrumental_soloImg from "../Assets/event_posters/instrumental solo web.jpg";
import ipl_auctionImg from "../Assets/event_posters/ipl auction web.jpg";
import logo_designImg from "../Assets/event_posters/logo design web.jpg";
import lyric_findingImg from "../Assets/event_posters/lyric finding web.jpg";
import maathi_yosiImg from "../Assets/event_posters/maathi yosi.jpg";
import mandala_artImg from "../Assets/event_posters/mandala art web.jpg";
import marauders_adventureImg from "../Assets/event_posters/marauders adventure web.jpg";
import mehendiImg from "../Assets/event_posters/mehendi web.jpg";
import memeImg from "../Assets/event_posters/meme mania.jpg";
import murder_mysterryImg from "../Assets/event_posters/murder mystery web.jpg";
import photographyImg from "../Assets/event_posters/photography web.jpg";
import pot_pourriImg from "../Assets/event_posters/pot pourri web.jpg";
import pushupImg from "../Assets/event_posters/pushup web.jpg";
import series_quizImg from "../Assets/event_posters/series quiz.jpg";
import shipwreckImg from "../Assets/event_posters/shipwreck web.jpg";
import short_filmImg from "../Assets/event_posters/short film web.jpg";
import solo_dancingImg from "../Assets/event_posters/solo dancing web.jpg";
import solo_singingImg from "../Assets/event_posters/solo singing web.jpg";
import sports_quizImg from "../Assets/event_posters/sports quiz web.jpg";
import squidgameImg from "../Assets/event_posters/squidgame web.jpg";
import talent_huntImg from "../Assets/event_posters/talent hunt web.jpg";
import treasure_huntImg from "../Assets/event_posters/treasure hunt web.jpg";
import tune_findingImg from "../Assets/event_posters/tunefinding web.jpg";
import valorantImg from "../Assets/event_posters/valorant web.jpg";
import variet_variety_groupImg from "../Assets/event_posters/variety variety group web.jpg";
import variet_variety_soloImg from "../Assets/event_posters/web variety variety solo.jpg";
import whats_the_climaxImg from "../Assets/event_posters/whats the climax web.jpg";
import fallbackImg from "../Assets/card-performing-arts.png";

// Event Category Image Mapping
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

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [animate, setAnimate] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // Checkbox state


    useEffect(() => {
        // Ensure eventsData is an array
        const events = eventsData.events || [];
        const selectedEvent = events.find(e => e.id === parseInt(id));
        if (selectedEvent) {
            setEvent(selectedEvent);
            setLoading(false);
            setTimeout(() => setAnimate(true), 100);
        } else {
            setError("The Marauder's Map couldn't locate this event...");
            setLoading(false);
        }
    }, [id]);

    if (loading) return (
        <div className="single-page-loading">
            <div className="ink-quill"></div>
            <p>Fetching from the Ministry archives...</p>
        </div>
    );

    const eventImage = Images[event.EventName] || fallbackImg; 

    return (
        <div className="single-page-container">
            <div className={`parchment ${animate ? 'animate-in' : ''}`}>
                <div className="header-section">
                    <h1 className={`title ${animate ? 'title-glow' : ''}`}>{event.EventName}</h1>
                    <img src={waxSeal} alt="Wax Seal" className={`seal ${animate ? 'seal-spin' : ''}`} />
                </div>

                <div className="content-grid">
                    <div className="image-column">
                        <div className="image-wrapper">
                            <img 
                                src={eventImage} 
                                alt={event.EventName} 
                                className={`event-image ${animate ? 'image-float' : ''}`}
                            />
                            <div className="image-shine"></div>
                        </div>
                    </div>

                    <div className="details-column">
                        {!showRules ? (
                            <>
                                <div className="description">
                                    <h3 className="section-heading">EVENT DETAILS</h3>
                                    <p className={`fade-in ${animate ? 'visible' : ''}`}>{event.Description}</p>
                                </div>

                                <div className="details-grid">
                                    <div className="detail-group">
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`}>
                                            <span>TYPE</span>
                                            <p>{event.Category}</p>
                                        </div>
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
                                            <span>TEAM SIZE</span>
                                            <p>{event.TeamMembers}</p>
                                        </div>
                                    </div>

                                    <div className="detail-group">
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
                                            <span>WHEN</span>
                                            <p>Day {event.Day} at {event.Time}</p>
                                        </div>
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
                                            <span>VENUE</span>
                                            <p>{event.Venue}</p>
                                        </div>
                                    </div>

                                    <div className="detail-group">
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`} style={{ transitionDelay: '0.4s' }}>
                                            <span>COORDINATORS</span>
                                            <div>
                                                {[
                                                    { name: event.EventCoordinator1, phone: event.PhoneNumber1 },
                                                    { name: event.EventCoordinator2, phone: event.PhoneNumber2 },
                                                    { name: event.EventCoordinator3, phone: event.PhoneNumber3 }
                                                ].filter(coordinator => coordinator.name && coordinator.name !== "NULL")
                                                 .map((coordinator, index) => (
                                                    <div key={index} className="coordinator">
                                                        <p><strong>{coordinator.name}</strong></p>
                                                        {coordinator.phone && <p>{coordinator.phone}</p>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="detail-group">
                                        <div className={`detail-item ${animate ? 'slide-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
                                            <span>ENTRY FEES</span>
                                            <p>Rs.{event.EntryFees}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="description">
                                <h3 className="section-heading">EVENT RULES</h3>
                                <p id="rules-content">
                                    <ul className="event-rules">
                                        {event.GeneralInstructions.split("\n").map((rule, index) => (
                                            <li key={index}>{rule.trim()}</li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        )}

                        <div className="action-row">
                            <button 
                                className="toggle-btn"
                                onClick={() => setShowRules(!showRules)}
                            >
                                {showRules ? "Back to Event Details" : "View Event Rules"}
                            </button>

                            {/* Checkbox for Terms and Conditions */}
                        <div className="terms-container">
                            <input
                                type="checkbox"
                                id="terms-checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor="terms-checkbox">
                                I accept the <a href={pdf} download="Terms_and_Conditions.pdf">Terms and Conditions</a>
                            </label>
                        </div>
                        
                            
                            <button 
                                className={`enroll-btn ${animate ? 'btn-pulse' : ''}`} 
                                onClick={() => { window.open(event.GForm, '_blank');}}
                                disabled={!isChecked} // Disable if checkbox isn't checked
                                style={{ opacity: isChecked ? 1 : 0.5, cursor: isChecked ? "pointer" : "not-allowed" }}
                            >
                                REGISTER
                                <span className="quill">✍︎</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;