const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  status: { type: String, enum: ['Going', 'Maybe', 'Decline'], required: true },
  updatedAt: { type: Date, default: Date.now },
});

rsvpSchema.index({ userId: 1, eventId: 1 }, { unique: true });

module.exports = mongoose.model('RSVP', rsvpSchema);
