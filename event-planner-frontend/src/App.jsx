import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventList from './components/EventList';
import EventForm from './components/EventForm';

const App = () => {
  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    const res = await axios.get('http://localhost:5000/api/events');
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">🎉 Event Planner</h1>
      <EventForm onEventCreated={loadEvents} />
      <EventList events={events} />
    </div>
  );
};

export default App;
