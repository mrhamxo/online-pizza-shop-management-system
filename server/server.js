const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/databaseConnection');
require('colors');
const morgan = require('morgan');

const app = express();

// config dotenv
dotenv.config();

// mongoDB connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// Route handlers
app.get('/', (req, res) => {
    res.send('Hello World from node server');
});

// start server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port on ${process.env.PORT}`.bgMagenta.white);
});