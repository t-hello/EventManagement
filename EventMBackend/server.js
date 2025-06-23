const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb+srv://nidhisharmavnc:KmCOAsWuIrZ5VhMw@cluster0.6kqdauy.mongodb.net/eventplanner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
}).catch(err => {
  console.error('DB connection error:', err);
});
