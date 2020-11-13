const MovimientoOperarioRepository = require('./movimientoOperario.repository');

module.exports = function (router) {
    const movimientoOperarioRepository = MovimientoOperarioRepository();

    router.route('/movimientoOperario/entrar')
        .post(movimientoOperarioRepository.entrar);

        router.route('/movimientoOperario/salir')
        .post(movimientoOperarioRepository.salir);

        router.route('/movimientoOperario')
        .get(movimientoOperarioRepository.buscarTodos)
}