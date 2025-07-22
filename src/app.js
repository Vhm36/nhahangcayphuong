const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { swaggerUi, swaggerSpec } = require('./config/swagger');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', routes);

app.get('/', (req, res) => res.json({ message: 'API is running...' }));

module.exports = app;
