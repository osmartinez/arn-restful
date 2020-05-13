const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    var tareaProgramada = require('./repository/tareaProgramada/tareaProgramada.routes')(router);
    var maquina = require('./repository/maquina/maquina.routes')(router);
    var ubicacion = require('./repository/ubicacion/ubicacion.routes')(router);
    var paquete = require('./repository/paquete/paquete.routes')(router);
    var utillaje = require('./repository/utillaje/utillaje.routes')(router);

    return router;
}

module.exports = eRoutes;