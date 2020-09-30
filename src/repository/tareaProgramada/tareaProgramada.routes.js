const TareaProgramadaRepository = require('./tareaProgramada.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const tareaProgramadaRepository = TareaProgramadaRepository(dbContext);
    router.route('/tareasProgramadas/:codigoMaquina')
        .get(tareaProgramadaRepository.getTareasProgramadasEnMaquina);

    router.route('/tareasProgramadas/programarEnMaquina')
        .post(tareaProgramadaRepository.programarTareaMaquina)

    router.route('/tareasProgramadas/consumirEnMaquina')
        .post(tareaProgramadaRepository.consumirTareaMaquina)

    router.route('/tareasProgramadas/desconsumirEnMaquina')
        .post(tareaProgramadaRepository.desconsumirTareaMaquina)

    router.route('/tareasProgramadas/desconsumirEtiqueta')
        .post(tareaProgramadaRepository.desconsumirEtiqueta)

        router.route('/tareasProgramadas/consumirEnPuesto')
        .post(tareaProgramadaRepository.consumirEnPuesto)

}