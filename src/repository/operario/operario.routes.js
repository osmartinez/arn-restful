const OperarioRepository = require('./operario.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const operarioRepository = OperarioRepository(dbContext);

    router.route('/operarios/:idOperario')
        .get(operarioRepository.buscar);

}