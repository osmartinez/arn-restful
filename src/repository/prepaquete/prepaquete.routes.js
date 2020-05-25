const PrepaqueteRepository = require('./prepaquete.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const prepaqueteRepository = PrepaqueteRepository(dbContext);
    router.route('/prepaquetes/:codigoEtiqueta/:codigoSeccion')
        .get(prepaqueteRepository.buscar);
        
}