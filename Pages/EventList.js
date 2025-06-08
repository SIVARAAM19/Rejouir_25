import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "./EventCard";
import "./EventList.css";
import eventBg from "../Assets/events-top-banner.jpg"; 
import eventsData from "../json/events.json"; // Import the JSON data

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null); 
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Use the imported JSON data instead of fetching from a file
    setEvents(eventsData.events); // Ensure you access the 'events' array from the JSON
  }, []);

  // Read the 'filter' and 'day' parameters from the URL
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    const dayParam = searchParams.get('day');
    
    if (dayParam) {
      setSelectedFilter(`Day ${dayParam}`);
    } else if (filterParam) {
      setSelectedFilter(filterParam);
    }
  }, [searchParams]);

  // Event Categories and Days
  const filters = [
    "Visual Arts",
    "Digital Arts",
    "Literary Arts",
    "Exclusive Events",
    "e-Sports",
    "Informals",
    "Sports",
    "Performing Arts",
    "Day 1",
    "Day 2",
    "Day 3"
  ];

  // Filter events based on search and selected filter
  const filteredEvents = events.filter((event) => {
    return (
      (!selectedFilter || 
        (selectedFilter.startsWith("Day") && parseInt(event.Day) === parseInt(selectedFilter.split(" ")[1])) ||
        event.Category === selectedFilter) &&
      (event.EventName?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  return (
    <div className="event-list-container">
      <div className="event-header">
        <img 
          src={eventBg} 
          alt="Event Background" 
          className="event-header-bg" 
          loading="eager" 
        />
        <h1 className="event-title">EVENTS ARENA</h1>
      </div>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            className={selectedFilter === filter ? "active" : ""}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
        <button
          className={selectedFilter === null ? "active" : ""}
          onClick={() => setSelectedFilter(null)}
        >
          All
        </button>
      </div>

      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="event-cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="no-events">No events found</p>
        )}
      </div>
    </div>
  );
};

export default EventList;