///////////////////////////////
// DEPENDENCIES
///////////////////////////////
require('dotenv').config();
const { PORT = 4080, MONGODB_URL } = process.env;

const mongoose = require('mongoose');
const express = require('express');
const app = express();

///////////////////////////////
// DATABASE CONNECTION
///////////////////////////////
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

///////////////////////////////
// ROUTES
///////////////////////////////
app.get('/', (req, res) => {
    res.send('Baku is here');
})

///////////////////////////////
// LISTENER
///////////////////////////////
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });