
const SP = require('./stock.sp')
const GenericRepository = require('../generic.repository')()

function StockRepository(dbContext) {

    async function buscarPorContenedor(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorContenedor, req,res,next)
    }

    async function buscarPorUbicacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorUbicacion, req,res,next)
    }

    async function buscarStockTallasPorStock(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockTallasPorStock, req,res,next)
    }

    return {
        buscarPorContenedor,
        buscarPorUbicacion,
        buscarStockTallasPorStock,
        
    }
}

module.exports = StockRepository;

