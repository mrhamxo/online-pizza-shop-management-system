const express = require('express');
require('colors');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// Route handlers
app.get('/', (req, res) => {
    res.send('Hello World from node server');
});

app.listen(3000, () => {
    console.log(`Server on port http://localhost:${3000}`.yellow);
});