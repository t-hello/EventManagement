import React, { useState } from 'react';
import axios from 'axios';

const RSVPForm = ({ eventId }) => {
  const [status, setStatus] = useState('Going');
  const [message, setMessage] = useState('');

  // const userId = 'user123'; // Simulated user
  const userId = '6858180a804bb6d9e604ed92'; // ✅ Must look like a real MongoDB ObjectId


  const submitRSVP = async () => {
    try {
      await axios.post('http://localhost:5000/api/rsvp', {
        eventId,
        userId,
        status,
      });
      setMessage('RSVP submitted!');
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage('RSVP already exists. Try updating.');
      } else {
        setMessage('Error: ' + err.response?.data?.error || err.message);
      }
    }
  };

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Your RSVP:</h4>
      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        className="border px-2 py-1 mr-2"
      >
        <option value="Going">Going</option>
        <option value="Maybe">Maybe</option>
        <option value="Decline">Decline</option>
      </select>
      <button className="bg-blue-600 text-white px-4 py-1 rounded" onClick={submitRSVP}>
        Submit RSVP
      </button>
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default RSVPForm;
