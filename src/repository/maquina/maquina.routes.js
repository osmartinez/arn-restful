const MaquinaRepository = require('./maquina.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const maquinaRepository = MaquinaRepository(dbContext);
    router.route('/maquinas/:codigoMaquina')
        .get(maquinaRepository.buscarPorCodigo);
}