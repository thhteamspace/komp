const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { errorHandler } = require('./middlewares/errorMiddleware');
// const apiRoutes = require('./routes/api'); // Example routes

const app = express();

// Middlewares
app.use(helmet()); // Security headers
app.use(cors()); // CORS
app.use(morgan('dev')); // Logger
app.use(express.json()); // Body parser

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'Backend is running' });
});

// APIs
// app.use('/api/v1', apiRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
