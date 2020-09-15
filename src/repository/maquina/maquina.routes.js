const MaquinaRepository = require('./maquina.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const maquinaRepository = MaquinaRepository(dbContext);

    router.route('/maquinas/:codigoMaquina')
        .get(maquinaRepository.buscarPorCodigo);

    router.route('/maquinas')
        .get(maquinaRepository.buscarTodas);


    router.route('/maquinas/enSeccion/:codSeccion')
        .get(maquinaRepository.buscarTodasEnSeccion);

    router.route('/maquinas/asociarAPuesto')
        .post(maquinaRepository.asociarAPuesto);


    router.route('/maquinas/actualizarConfiguracionPines')
        .post(maquinaRepository.actualizarConfiguracionPines);
}