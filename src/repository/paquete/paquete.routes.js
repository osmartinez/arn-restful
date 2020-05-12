const PaqueteRepository = require('./paquete.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const paqueteRepository = PaqueteRepository(dbContext);
    router.route('/paquetes/buscarPorCodigoUbicacion/:codigoUbicacion')
        .get(paqueteRepository.buscarPorUbicacion);

    router.route('/paquetes/buscarPorCodigoAgrupacion/:codigoAgrupacion')
        .get(paqueteRepository.buscarPorAgrupacion);

    router.route('/paquetes/buscarPorCodigoEtiqueta/:codigoEtiqueta')
        .get(paqueteRepository.buscarPorCodigoEtiqueta);
}