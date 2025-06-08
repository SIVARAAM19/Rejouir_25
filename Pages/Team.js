import React, { useEffect, useRef } from "react";
import "./Team.css";

const Team = () => {
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
  
    let isUserScrolling = false;
    let timeoutId = null;
    let lastScrollDirection = 1; // 1 for down, -1 for up
    const scrollStep = 3;
    const scrollDelay = 50;
  
    const startAutoScroll = () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  
      scrollIntervalRef.current = setInterval(() => {
        if (isUserScrolling) return; // Pause auto-scroll when user is scrolling manually
  
        let currentScroll = container.scrollTop;
        let maxScroll = container.scrollHeight - container.clientHeight;
  
        // Scroll in the last detected direction
        let newScroll = currentScroll + scrollStep * lastScrollDirection;
  
        // If reaching bottom, reverse direction
        if (newScroll >= maxScroll) lastScrollDirection = -1;
        // If reaching top, reverse direction
        else if (newScroll <= 0) lastScrollDirection = 1;
  
        container.scrollTo({ top: newScroll, behavior: "auto" });
      }, scrollDelay);
    };
  
    const handleUserScroll = (event) => {
      isUserScrolling = true;
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  
      // Detect scroll direction
      lastScrollDirection = event.deltaY > 0 ? 1 : -1; // Wheel scroll
      if (event.type === "touchmove") {
        let touch = event.touches[0];
        let touchDiff = touch.clientY - container.scrollTop;
        lastScrollDirection = touchDiff < 0 ? 1 : -1; // Touch scroll
      }
  
      // Restart auto-scroll after 2 seconds
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 10);
    };
  
    // Attach event listeners
    container.addEventListener("wheel", handleUserScroll);
    container.addEventListener("touchmove", handleUserScroll);
  
    startAutoScroll();
  
    return () => {
      container.removeEventListener("wheel", handleUserScroll);
      container.removeEventListener("touchmove", handleUserScroll);
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
      clearTimeout(timeoutId);
    };
  }, []);
  

  const teamData = {
    patronAndDean: [
      { name: "Prof. Dr.S Mohan", position: "Vice-Chancellor - PTU", role: "Patron" },
      {
        name: "Dr. Gnanou Florence Sudha",
        position: "",
        role: "Dean Students",
      },
    ],
    convenors: [
      { name: "Dr.P Boobalan", position: "Professor - PTU", role: "Convenor" },
      { name: "Dr.N SIVAKUMAR", position: "Professor - PTU", role: "Convenor" },
      {
        name: "Dr. Harish Kumar",
        position: "Professor - PTU",
        role: "Convenor",
      },
      {
        name: "Dr.M Sudhakaran",
        position: "Professor - PTU",
        role: "Convenor",
      },
    ],
    secretaries: [
      {
        name: "Kiruthivas A",
        role: "Secretary",
        year: "IV year CH",
        phone: "6385360104",
      },
      {
        name: "Karthikkeyan V",
        role: "Secretary",
        year: "IV year CE",
        phone: "6381529115",
      },
      {
        name: "Bharani M",
        role: "Secretary",
        year: "IV year CSE",
        phone: "9489121055",
      },
      {
        name: "Farid S",
        role: "Secretary",
        year: "IV year ECE",
        phone: "6381552549",
      },
      {
        name: "Mohamed Safwaan M",
        role: "Secretary",
        year: "IV year EEE",
        phone: "7708261846",
      },
      {
        name: "Pavithran K",
        role: "Secretary",
        year: "IV year EIE",
        phone: "9003427872",
      },
      {
        name: "Ajaikumar G",
        role: "Secretary",
        year: "IV year IT",
        phone: "9600741779",
      },
      {
        name: "Shrikaanth G",
        role: "Secretary",
        year: "IV year ME",
        phone: "9360713353",
      },
      {
        name: "Mugundhan N",
        role: "Secretary",
        year: "IV year MTE",
        phone: "9787026408",
      },
    ],
    committeeIncharges: [
      { name: "Shrikaanth G", role: "Disciplinary", phone: "9360713353" },
      { name: "Karthikkeyan V", role: "FOOD", phone: "6381529115" },
      { name: "Akilesh B", role: "FOOD", phone: "8220716821" },
      { name: "Arvind", role: "Stage & Decoration", phone: "9361080414" },
      { name: "Suhail", role: "Stage & Decoration", phone: "6380348732" },
      { name: "Mugundhan N", role: "Sponsors", phone: "9787026408" },
      { name: "Kiruthik", role: "Sponsors", phone: "7540088847" },
      { name: "Devanathan B", role: "Design", phone: "7397144848" },
      {
        name: "Uma Maheswari P",
        role: "Finance & Documentation",
        phone: "9976340043",
      },
      { name: "Ajaikumar G", role: "Printing", phone: "9600741779" },
      { name: "Bharani M", role: "Printing", phone: "9489121055" },
      { name: "Bhuvan", role: "Printing", phone: "9500835740" },
      { name: "Raajavardhini", role: "Photography", phone: "9500619499" },
      { name: "Anjali S", role: "Registration desk", phone: "8072400584" },
      { name: "Devanathan B", role: "Media", phone: "7397144848" },
      { name: "Pavithran K", role: "Media", phone: "9003427872" },
      {
        name: "Kaviprasath",
        role: "Chief guest & External affairsMedia",
        phone: "8072320351",
      },
      {
        name: "Farid S",
        role: "Chief guest & External affairs",
        phone: "6381552549",
      },
      { name: "Kathiravan", role: "Flashmob", phone: "6381305478" },
      { name: "Parthiban K", role: "Flashmob", phone: "9345013663" },
      { name: "Rajkumar", role: "Event Management", phone: "9360220346" },
      {
        name: "Kudum Sunil Kumar",
        role: "Event Management",
        phone: "9618726090",
      },
      { name: "Varun", role: "Event Management", phone: "9150218260" },
      { name: "Sandeep S", role: "Website", phone: "7339076846" },
      { name: "Surendar U", role: "Inauguration", phone: "9345647938" },
      { name: "Santhosh", role: "Inauguration", phone: "8838382226" },
      { name: "Divakar", role: "Publicity", phone: "8220244412" },
      { name: "Rubankumar", role: "Publicity", phone: "7305351591" },
      { name: "Mohammed Safwaan M", role: "Stalls", phone: "7708261846" },
      { name: "Tamizhmaran", role: "Stalls", phone: "9486894722" },
    ],
    webteam: [
      { name: "Sakthi Priyen", role: "Web Team", phone: "9360980042" },
      { name: "Sakthrian", role: "Web Team", phone: "9442843823" },
      { name: "Sivaraam", role: "Web Team", phone: "9787764584" },
      { name: "Kishore Khannan", role: "Web Team", phone: "9566727975" },
      { name: "Sandeep", role: "Web Team", phone: "7339076846" },
  
    ],
  };

  return (
    <div className="team-page">
      <div
        className="team-container"
        ref={containerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <h1 className="page-title">Our Team</h1>

        {/* Patron & Student Dean Section */}
        <div className="special-section">
          <div className="team-grid">
            {teamData.patronAndDean.map((member, index) => (
              <div key={index} className="team-member patron-dean-card">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Convenors Section */}
        <div className="special-section">
          <div className="team-grid">
            {teamData.convenors.map((member, index) => (
              <div key={index} className="team-member convenor-card">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secretaries Section */}
        <div className="team-section">
          <h2 className="section-title">Secretaries</h2>
          <div className="team-grid">
            {teamData.secretaries.map((member, index) => (
              <div key={index} className="team-member secretary-card">
                <h3>{member.name}</h3>
                <p className="role">{member.year} </p>
                <p className="details">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Incharges Section */}
        <div className="team-section">
          <h2 className="section-title">Committee Incharges</h2>
          <div className="team-grid">
            {teamData.committeeIncharges.map((member, index) => (
              <div key={index} className="team-member committee-incharge-card">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="phone">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
                {/* web team Section */}
                <div className="team-section">
          <h2 className="section-title">Web Team</h2>
          <div className="team-grid">
            {teamData.webteam.map((member, index) => (
              <div key={index} className="team-member secretary-card">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="phone">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;