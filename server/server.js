const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/api/status', (req, res) => {
  res.json({ message: 'Wecove server is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});