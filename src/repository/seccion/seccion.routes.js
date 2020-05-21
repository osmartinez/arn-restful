const SeccionRepository = require('./seccion.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const seccionRepository = SeccionRepository(dbContext);
    
    router.route('/secciones/:codigoSeccion')
        .get(seccionRepository.buscarPorCodigo);

    router.route('/secciones')
        .get(seccionRepository.buscarTodas);

}