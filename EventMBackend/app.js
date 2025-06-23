const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const eventRoutes = require('./routes/events');
const rsvpRoutes = require('./routes/rsvp');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/rsvp', rsvpRoutes);

module.exports = app;
