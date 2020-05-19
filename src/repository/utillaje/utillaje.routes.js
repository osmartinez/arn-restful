const UtillajeRepository = require('./utillaje.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const utillajeRepository = UtillajeRepository(dbContext);

    router.route('/utillajes/localizarPorOrdenFabricacionSeccion/:idOrden/:codSeccion')
        .get(utillajeRepository.localizarPorOrdenFabricacionSeccion);

        router.route('/utillajes/localizarPorPrepaqueteSeccion/:codigoPrepaquete/:codSeccion')
        .get(utillajeRepository.localizarPorPrepaqueteSeccion);

}