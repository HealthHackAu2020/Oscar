"use strict";
const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 9000
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(PORT, () => console.log('server is running on', process.env.PORT));
