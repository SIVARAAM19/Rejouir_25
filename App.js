import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Section_1 from "./Components/Homepage/Section_1";
import Section_2 from "./Components/Homepage/Section_2";
import Section_3 from "./Components/Homepage/Section_3";
import Section_4 from "./Components/Homepage/Section_4";
import Section_5 from "./Components/Homepage/Section_5";
import GoldenSnitch from "./Components/Homepage/GoldenSnitch";
import StarBackground from "./Components/StarBackground";
import NewBackground from "./Components/NewBackground";
import Navbar from "./Components/NavBar/Navbar";
import Loading from "./Components/Loading/Loading";
import EventsHub from "./Pages/EventList";
import EventDetails from "./Pages/EventDetails";
import Proshows from "./Pages/Proshows";
import BrouchureAndMap from "./Pages/BrouchureAndMap";
import Team from "./Pages/Team";
import ProShowRegistration from "./Pages/ProshowRegistration";
import "./App.css";
import MagicCursor from "./Components/Homepage/MagicCursor";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  // Initial Loading before showing the application
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Handler with 4500ms Loading Delay
  const handleNavigation = (path) => {
    setIsNavigating(true); // Show loading
    setTimeout(() => {
      setIsNavigating(false); // Hide loading after delay
      navigate(path === "/home" ? "/" : path);
    }, 4500);
  };

  return (
    <div className="App">
      {/* Show Loading Screen if the app is initially loading or navigating */}
      {isLoading || isNavigating ? (
        <Loading />
      ) : (
        <>
          <MagicCursor />
          <Navbar handleNavigation={handleNavigation} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: Math.max(1 - scrollY / 500, 0),
                      transition: "opacity 0.5s",
                      zIndex: 1,
                    }}
                  >
                    <StarBackground />
                  </div>

                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      opacity: Math.min(scrollY / 500, 1),
                      transition: "opacity 0.5s",
                      zIndex: 0,
                    }}
                  >
                    <NewBackground />
                  </div>

                  <div>
                    <GoldenSnitch />

                    <div id="section1" style={{ zIndex: 2, position: "relative" }}>
                      <Section_1 />
                    </div>
                    <div id="section2" style={{ zIndex: 2, position: "relative" }}>
                      <Section_2 />
                    </div>
                    <div id="section3" style={{ zIndex: 2, position: "relative" }}>
                      <Section_3 />
                    </div>
                    <div id="section4" style={{ zIndex: 2, position: "relative" }}>
                      <Section_4 />
                    </div>
                    <div id="section5" style={{ zIndex: 2, position: "relative" }}>
                      <Section_5 />
                    </div>
                  </div>
                </>
              }
            />

            <Route path="/EventsHub" element={<EventsHub />} />
            <Route path="/events" element={<EventsHub />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/Proshows" element={<Proshows />} />
            <Route path="/BrouchureAndMap" element={<BrouchureAndMap />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/proshow-registration" element={<ProShowRegistration />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
