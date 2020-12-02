const StockRepository = require('./stock.repository');
const dbContext = require('../../database/dbContext');

module.exports = function (router) {
    const stockRepository = StockRepository(dbContext);

    router.route('/stocks/buscarPorCodigoContenedor/:codigoEtiqueta')
        .get(stockRepository.buscarPorContenedor);

    router.route('/stocks/buscarPorCodigoUbicacion/:codigoUbicacion')
        .get(stockRepository.buscarPorUbicacion);

    router.route('/stocks/buscarPorPrepaquete/:codigoPrepaquete')
        .get(stockRepository.buscarPorPrepaquete);

    router.route('/stocks/buscarPorIdOrden/:idOrden')
        .get(stockRepository.buscarPorIdOrden);

    router.route('/stocks/buscarStockTallas/:idStock')
        .get(stockRepository.buscarStockTallasPorStock);

    router.route('/stocks/buscarStockArticuloEnUbicacion/:codigoArticulo/:codUbicacion')
        .get(stockRepository.buscarStockArticuloEnUbicacion);

    router.route('/stocks/borrar/:idStock')
        .get(stockRepository.borrarStock);

    router.route('/stocks/buscarCodigoArticuloPorOrden/:idOrden')
        .get(stockRepository.buscarCodigoArticuloPorOrdenFabricacion);

        router.route('/stocks/buscarPorReferencia/:codigoArticulo')
        .get(stockRepository.buscarStockPorReferencia);

    router.route('/stocks/actualizar')
        .post(stockRepository.actualizar);

    router.route('/stocks/crear')
        .post(stockRepository.crear);

        router.route('/stocks/verificar')
        .post(stockRepository.verificar);
}