const PuestoRepository = require('./puesto.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const puestoRepository = PuestoRepository(dbContext);

    router.route('/puestos/crear')
        .post(puestoRepository.crear);

    router.route('/puestos/actualizar')
        .post(puestoRepository.actualizar);


    router.route('/puestos/buscarPorCodigoEtiqueta/:codigoEtiqueta')
        .get(puestoRepository.buscarPorCodigoEtiqueta);

    router.route('/puestos/buscarPorDescripcion/:descripcion')
        .get(puestoRepository.buscarPorDescripcion);

    router.route('/puestos/actualizarIncidencia')
        .post(puestoRepository.actualizarIncidencia);

    router.route('/puestos')
        .get(puestoRepository.obtenerTodos);

    router.route('/puestos/:id')
        .get(puestoRepository.obtenerPorId);

    router.route('/puestos/obtenerConfiguracionesIncidencias/:id')
        .get(puestoRepository.obtenerConfiguracionesIncidencias);

    router.route('/puestos/obtenerConfiguracionesPins/:id')
        .get(puestoRepository.obtenerConfiguracionesPins);

    router.route('/puestos/obtenerMaquinas/:id')
        .get(puestoRepository.obtenerMaquinas);

        router.route('/puestos/entradaOperarioPorCodigoObrero')
        .post(puestoRepository.entradaOperarioPorCodigoObrero);

        router.route('/puestos/salidaOperarioPorCodigoObrero')
        .post(puestoRepository.salidaOperarioPorCodigoObrero);

        router.route('/puestos/buscarOperariosActuales/:id')
        .get(puestoRepository.buscarOperariosActuales);

}