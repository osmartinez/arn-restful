const PuestoRepository = require('./puesto.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const puestoRepository = PuestoRepository(dbContext);

    router.route('/puestos/crear')
        .post(puestoRepository.crear);

    router.route('/puestos/buscarPorCodigoEtiqueta/:codigoEtiqueta')
        .get(puestoRepository.buscarPorCodigoEtiqueta);

    router.route('/puestos/buscarPorDescripcion/:descripcion')
        .get(puestoRepository.buscarPorDescripcion);
}