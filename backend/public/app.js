"use strict";
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(process.env.PORT, () => console.log('server is running'));
