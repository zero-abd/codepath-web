import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, location, description, image, registrationLink }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-location">{location}</p>
        <p className="event-description">{description}</p>
        <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="event-button">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default EventCard; 