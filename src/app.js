const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

app.get('/', (req, res) => res.json({ message: 'API is running...' }));

module.exports = app;
