const OrdenFabricacionRepository = require('./ordenFabricacion.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ordenFabricacionRepository = OrdenFabricacionRepository(dbContext);

    router.route('/ordenesFabricacion/:idOrden')
        .get(ordenFabricacionRepository.buscar);

    router.route('/ordenesFabricacion/buscarOperacion/:idOrden/:codSeccion')
        .get(ordenFabricacionRepository.buscarOperacion);

    router.route('/ordenesFabricacion/buscarOperaciones/:idOrden')
        .get(ordenFabricacionRepository.buscarOperaciones);

    router.route('/ordenesFabricacion/buscarOperacionesTallas/:idOperacion')
        .get(ordenFabricacionRepository.buscarOperacionesTallas);

        router.route('/ordenesFabricacion/buscarOperaciones/:codigoEtiqueta/:codigoMaquina')
        .get(ordenFabricacionRepository.buscarOperacionesPorPrepaqueteMaquina);

        router.route('/ordenesFabricacion/buscarOperacionesEnSeccion/:id/:codSeccion')
        .get(ordenFabricacionRepository.buscarOperacionesEnSeccion);
}