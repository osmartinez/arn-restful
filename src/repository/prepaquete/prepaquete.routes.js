const PrepaqueteRepository = require('./prepaquete.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const prepaqueteRepository = PrepaqueteRepository(dbContext);

    router.route('/prepaquetes/buscarEnSeccion')
        .get(prepaqueteRepository.buscarEnSeccion);

        router.route('/prepaquetes/:codigoEtiqueta')
        .get(prepaqueteRepository.buscarPorCodigo);
        
        router.route('/prepaquetes/actualizarCantidad')
        .post(prepaqueteRepository.actualizarCantidad);
}