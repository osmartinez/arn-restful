const TallerRepository = require('./taller.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const tallerRepository = TallerRepository(dbContext);
    router.route('/talleres/leer/:idTaller/:codPrepaquete/:codSeccion')
        .get(tallerRepository.enviarPrepaquete);

    router.route('/talleres')
        .get(tallerRepository.buscarTodos);

    router.route('/talleres/recibir/:idTaller/:codPrepaquete/:codSeccion')
        .get(tallerRepository.recibirPrepaquete);

}