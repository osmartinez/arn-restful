const TareaProgramadaRepository = require('./tareaProgramada.repository');
const dbContext = require('../../Database/dbContext');

module.exports = function (router) {
const tareaProgramadaRepository = TareaProgramadaRepository(dbContext);
    router.route('/tareasProgramadas/:codigoMaquina')
        .get(tareaProgramadaRepository.getTareasProgramadasEnMaquina);

    router.route('/tareasProgramadas/programarEnMaquina')
        .post(tareaProgramadaRepository.programarTareaMaquina)
}