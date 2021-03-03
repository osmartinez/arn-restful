
const SP = require('./stock.sp')
const GenericRepository = require('../generic.repository')()

function StockRepository(dbContext) {

    async function buscarPorContenedor(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorContenedor, req,res,next)
    }

    async function buscarPorUbicacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorUbicacion, req,res,next)
    }

    async function buscarPorPrepaquete(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorPrepaquete, req,res,next)
    }

    async function buscarPorBarquilla(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorBarquilla, req,res,next)
    }

    async function buscarPorIdOrden(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorIdOrden, req,res,next)
    }

    async function buscarPorIdOperacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockPorIdOperacion, req,res,next)
    }


    async function buscarStockTallasPorStock(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockTallasPorStock, req,res,next)
    }

    async function buscarStockArticuloEnUbicacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarStockArticuloEnUbicacion, req,res,next)
    }

    async function borrarStock(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BorrarStock, req,res,next)
    }

    async function buscarCodigoArticuloPorOrdenFabricacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarCodigoArticuloPorIdOrden, req,res,next)
    }

    async function actualizar(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarStockArticuloTalla, req,res,next)
    }

    async function crear(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.CrearStock, req,res,next)
    }

    async function verificar(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.VerificarStock, req,res,next)
    }

    async function buscarStockPorReferencia(req,res,next){
        GenericRepository.execute(dbContext,req.params,SP.BuscarStockPorReferencia, req,res,next)
    }

    return {
        buscarPorContenedor,
        buscarPorUbicacion,
        buscarStockTallasPorStock,
        buscarPorPrepaquete,
        buscarPorIdOrden,
        buscarPorIdOperacion,
        buscarStockArticuloEnUbicacion,
        borrarStock,
        buscarCodigoArticuloPorOrdenFabricacion,
        actualizar,
        crear,
        buscarStockPorReferencia,
        verificar,
        buscarPorBarquilla,
    }
}

module.exports = StockRepository;

