const UbicacionRepository = require('./ubicacion.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const ubicacionRepository = UbicacionRepository(dbContext);
    router.route('/ubicaciones/:codigoUbicacion')
        .get(ubicacionRepository.buscarPorCodigo);

    router.route('/ubicaciones/ubicarContenedor')
        .post(ubicacionRepository.ubicarContenedor);

    router.route('/ubicaciones/ubicarAgrupacion')
        .post(ubicacionRepository.ubicarAgrupacion);

    router.route('/ubicaciones/ubicarPrepaquete')
        .post(ubicacionRepository.ubicarPrepaquete);
}