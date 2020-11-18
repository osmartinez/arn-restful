const TareaNoSQLRepository = require('./tareaNoSQL.repository');

module.exports = function (router) {
    const tareaNoSQLRepository = TareaNoSQLRepository();

    router.route('/tareaNoSQL/comenzar')
        .post(tareaNoSQLRepository.comenzar);

    router.route('/tareaNoSQL/finalizar')
        .post(tareaNoSQLRepository.finalizar);

        router.route('/tareaNoSQL/sumarPares')
        .post(tareaNoSQLRepository.sumarPares);

    router.route('/tareaNoSQL/sumarDefectuosas')
        .post(tareaNoSQLRepository.sumarDefectuosas);

    router.route('/tareaNoSQL/sumarSaldos')
        .post(tareaNoSQLRepository.sumarSaldos);

    router.route('/tareaNoSQL/obtenerTarea')
        .get(tareaNoSQLRepository.obtenerTareaPuesto);

}