const mongoose = require('mongoose');
const express = require('express');
const RSVP = require('../models/RSVP');
const Event = require('../models/Event');

const router = express.Router();

// Create RSVP
router.post('/', async (req, res) => {
  const { userId, eventId, status } = req.body;
  const event = await Event.findById(eventId);

  if (!event || new Date(event.eventDate) < new Date()) {
    return res.status(400).json({ error: 'Invalid or past event' });
  }

  try {
    // const rsvp = new RSVP({ userId, eventId, status });
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(eventId)) {
  return res.status(400).json({ error: 'Invalid userId or eventId format' });
}

const rsvp = new RSVP({
  userId: new mongoose.Types.ObjectId(userId),
  eventId: new mongoose.Types.ObjectId(eventId),
  status,
});

    await rsvp.save();
    res.status(201).json(rsvp);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'RSVP already exists for this user' });
    }
    res.status(500).json({ error: err.message });
  }
});

// Update RSVP
router.put('/:id', async (req, res) => {
  const rsvp = await RSVP.findById(req.params.id).populate('eventId');
  if (!rsvp) return res.status(404).json({ error: 'RSVP not found' });

  if (new Date(rsvp.eventId.eventDate) < new Date()) {
    return res.status(400).json({ error: 'Cannot update RSVP after event date' });
  }

  rsvp.status = req.body.status;
  rsvp.updatedAt = new Date();
  await rsvp.save();
  res.json(rsvp);
});

module.exports = router;
