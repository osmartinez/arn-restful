const BancadaRepository = require('./bancada.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const bancadaRepository = BancadaRepository(dbContext);

    /**
     * Busca la bancada con id :id
     * bancadas/10
     */
    router.route('/bancadas')
        .get(bancadaRepository.buscarPorId);

    /**
     * Busca las maquinas pertenecientes a la bancada con id dado
     * bancadas/maquinas?idBancada=10
     */
    router.route('/bancadas/maquinas')
        .get(bancadaRepository.buscarMaquinas);
}