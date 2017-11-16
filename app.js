// Bringing in dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connecting to Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});
// On Error
mongoose.connection.on('error', () => {
    console.log('Database Error '+err);
});

// Intializing Express
const app = express();

// Bringin in routes
const users = require('./routes/users');

// Port Numger
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send("Invalid Endpoint");
});

// Start Server
app.listen(port, () => {
    console.log("Server started on port 3000... ");
});