const StockRepository = require('./stock.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const stockRepository = StockRepository(dbContext);

    router.route('/stocks/buscarPorCodigoContenedor/:codigoEtiqueta')
        .get(stockRepository.buscarPorContenedor);

    router.route('/stocks/buscarPorCodigoUbicacion/:codigoUbicacion')
        .get(stockRepository.buscarPorUbicacion);

    router.route('/stocks/buscarStockTallas/:idStock')
        .get(stockRepository.buscarStockTallasPorStock);
}