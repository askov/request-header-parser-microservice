'use strict';

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    const ipaddress = req.headers['x-forwarded-for']
        ? req.headers['x-forwarded-for'].split(',')[0]
        : null;
    const language = req.headers['accept-language']
        .slice(0, 5);
    const software = req.headers['user-agent']
        .match(/\(([^)(]+)\)/gi)[0]
        .slice(1,-1);
    res.send({
        ipaddress: ipaddress,
        language: language,
        software: software
    });
});

app.listen(3000);