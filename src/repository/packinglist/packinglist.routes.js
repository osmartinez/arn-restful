const PackinglistRepository = require('./packinglist.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const packinglistRepository = PackinglistRepository(dbContext);
    router.route('/packinglists/crear')
        .post(packinglistRepository.crear);

        router.route('/packinglists/insertarContenedor')
        .post(packinglistRepository.insertarContenedor);
}