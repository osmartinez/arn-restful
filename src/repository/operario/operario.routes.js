const OperarioRepository = require('./operario.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const operarioRepository = OperarioRepository(dbContext);

    router.route('/operarios/:idOperario')
        .get(operarioRepository.buscar);

        router.route('/operarios/entrada')
        .post(operarioRepository.entradaPuesto);

        router.route('/operarios/salida')
        .post(operarioRepository.salidaPuesto);
}