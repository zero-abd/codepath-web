import React from 'react';
import EventCard from './EventCard';
import './EventGrid.css';

const EventGrid = ({ events }) => {
  return (
    <div className="event-grid">
      {events.map((event) => (
        <div className="event-grid-item" key={event.id}>
          <EventCard
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
            image={event.image}
            registrationLink={event.registrationLink}
          />
        </div>
      ))}
    </div>
  );
};

export default EventGrid; 