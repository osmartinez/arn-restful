const express = require('express'); 

function eRoutes() {
    const router = express.Router();
    
    var tareaProgramada = require('./repository/tareaProgramada/tareaProgramada.routes')(router);
    var maquina = require('./repository/maquina/maquina.routes')(router);
    var ubicacion = require('./repository/ubicacion/ubicacion.routes')(router);
    var paquete = require('./repository/paquete/paquete.routes')(router);
    var utillaje = require('./repository/utillaje/utillaje.routes')(router);
    var packinglist = require('./repository/packinglist/packinglist.routes')(router);
    var stock = require('./repository/stock/stock.routes')(router);
    var operario = require('./repository/operario/operario.routes')(router);
    var ordenFabricacion = require('./repository/ordenFabricacion/ordenFabricacion.routes')(router);
    var seccion = require('./repository/seccion/seccion.routes')(router);
    var prepaquete = require('./repository/prepaquete/prepaquete.routes')(router);
    var talleres = require('./repository/taller/taller.routes')(router);
    return router;
}

module.exports = eRoutes;