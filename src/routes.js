const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    var tareaProgramada = require('./repository/tareaProgramada/tareaProgramada.routes')(router);
    return router;
}

module.exports = eRoutes;