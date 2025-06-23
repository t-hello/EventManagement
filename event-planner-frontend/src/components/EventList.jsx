import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RSVPForm from './RSVPForm';

const EventList = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [summary, setSummary] = useState(null);

  const loadSummary = async (id) => {
    const res = await axios.get(`http://localhost:5000/api/events/${id}`);
    setSelectedEvent(res.data.event);
    setSummary(res.data.summary);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">📅 Upcoming Events</h2>
      {events.map(event => (
        <div key={event._id} className="border rounded p-4 mb-4">
          <h3 className="text-lg font-bold">{event.title}</h3>
          <p>{event.description}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleString()}</p>
          <button
            className="bg-green-600 text-white px-2 py-1 mt-2 rounded mr-2"
            onClick={() => loadSummary(event._id)}
          >
            View RSVP & Respond
          </button>
        </div>
      ))}

      {selectedEvent && (
        <div className="bg-white p-4 mt-6 border rounded">
          <h3 className="text-xl font-bold mb-2">📊 RSVP Summary</h3>
          <p>Going: {summary.Going}</p>
          <p>Maybe: {summary.Maybe}</p>
          <p>Decline: {summary.Decline}</p>
          <RSVPForm eventId={selectedEvent._id} />
        </div>
      )}
    </div>
  );
};

export default EventList;
