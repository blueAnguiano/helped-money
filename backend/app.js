'use strict';

const express = require('express');
const route = require("./routes/routes");

const app = express();

app.use((error, req, res, next) => {
    next();
});

app.use('/app/v1', route);

module.exports = app;