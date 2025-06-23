const express = require('express');
const Event = require('../models/Event');
const RSVP = require('../models/RSVP');

const router = express.Router();

// Create event
router.post('/', async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find().sort({ eventDate: 1 });
  res.json(events);
});

// Get event by ID + RSVP summary
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    const rsvps = await RSVP.find({ eventId: req.params.id });

    const summary = {
      Going: rsvps.filter(r => r.status === 'Going').length,
      Maybe: rsvps.filter(r => r.status === 'Maybe').length,
      Decline: rsvps.filter(r => r.status === 'Decline').length,
    };

    res.json({ event, summary });
  } catch (err) {
    res.status(404).json({ error: 'Event not found' });
  }
});

// Update event
router.put('/:id', async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete event
router.delete('/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: 'Event deleted' });
});

module.exports = router;
