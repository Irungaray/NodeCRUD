// External modules
const express = require('express');

// Internal modules
const message = require('../components/message/network');
const user = require('../components/user/network');

const routes = function (server) {
    server.use('/message', message);
    server.use('/users', user);
}

module.exports = routes;