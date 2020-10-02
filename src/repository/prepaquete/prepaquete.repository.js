const SP = require('./prepaquete.sp')
const GenericRepository = require('../generic.repository')()

function PrepaqueteRepository(dbContext) {

    async function buscarEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarEnSeccion, req,res,next)
    }

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    async function actualizarCantidad(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.ActualizarCantidad, req,res,next)
    }

    return {
        buscarEnSeccion,
        buscarPorCodigo,
        actualizarCantidad,

    }
}

module.exports = PrepaqueteRepository;