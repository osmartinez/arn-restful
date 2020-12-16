const OrdenFabricacionOperacionRepository = require('./ordenFabricacionOperacion.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ordenFabricacionOperacionRepository = OrdenFabricacionOperacionRepository(dbContext);

    router.route('/ordenesFabricacionOperacion/:idOperacion')
        .get(ordenFabricacionOperacionRepository.buscarPorIdParaPuesto);

}