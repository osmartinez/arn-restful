const OrdenFabricacionRepository = require('./ordenFabricacion.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ordenFabricacionRepository = OrdenFabricacionRepository(dbContext);

    router.route('/ordenesFabricacion/:idOrden')
        .get(ordenFabricacionRepository.buscar);

    router.route('/ordenesFabricacion/buscarOperacion/:idOrden/:codSeccion')
        .get(ordenFabricacionRepository.buscarOperacion);
}