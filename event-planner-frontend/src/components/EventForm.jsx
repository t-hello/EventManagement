import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onEventCreated }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    location: '',
    eventDate: '',
    createdBy: 'admin_id_123', // Simulated admin
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/events', form);
    setForm({ title: '', description: '', location: '', eventDate: '', createdBy: 'admin_id_123' });
    onEventCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">➕ Create New Event</h2>
      <input className="border p-2 w-full mb-2" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea className="border p-2 w-full mb-2" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
      <input className="border p-2 w-full mb-2" type="datetime-local" value={form.eventDate} onChange={e => setForm({ ...form, eventDate: e.target.value })} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Event</button>
    </form>
  );
};

export default EventForm;
