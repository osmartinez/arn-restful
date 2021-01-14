const MaquinaRepository = require('./maquina.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const maquinaRepository = MaquinaRepository(dbContext);

    /**
     * Busca una maquina por su codigo de etiqueta
     */
    router.route('/maquinas/:codigoMaquina')
        .get(maquinaRepository.buscarPorCodigo);

    /**
     * Busca todas las maquinas
     */
    router.route('/maquinas')
        .get(maquinaRepository.buscarTodas);


    /**
     * Busca todas las maquinas de una seccion
     */
    router.route('/maquinas/enSeccion/:codSeccion')
        .get(maquinaRepository.buscarTodasEnSeccion);

    /**
     * Asocia una maquina a un puesto
     */
    router.route('/maquinas/asociarAPuesto')
        .post(maquinaRepository.asociarAPuesto);

    /**
     * desasocia una maquina de un puesto
     */
    router.route('/maquinas/desasociarPuesto')
        .post(maquinaRepository.desasociarPuesto);

    /**
     * actualiza la configuracion de los pines de una maquina
     */
    router.route('/maquinas/actualizarConfiguracionPines')
        .post(maquinaRepository.actualizarConfiguracionPines);

    /**
     * actualiza la posicion de una maquina en la interfaz
     */
    router.route('/maquinas/actualizarPosicionUI')
        .post(maquinaRepository.actualizarPosicionUI);


    /**
     * actualiza la posicion de una maquina en la interfaz
     */
    router.route('/maquinas/asignarTareaEjecucion')
        .post(maquinaRepository.asignarTareaEjecucion);

            /**
     * actualiza la posicion de una maquina en la interfaz
     */
    router.route('/maquinas/obtenerTodosMoldes')
    .get(maquinaRepository.obtenerTodosMoldes);

}