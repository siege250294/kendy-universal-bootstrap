const express = require('express');
const morgan = require('morgan');

// Initialize app
const app = express();

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

module.exports = app;
