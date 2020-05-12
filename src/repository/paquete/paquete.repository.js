
const response = require('../../shared/response');
const SP = require('./paquete.sp')
const GenericRepository = require('../generic.repository')()

function PaqueteRepository(dbContext) {

    async function buscarPorUbicacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorUbicacion, req,res,next)
    }

    async function buscarPorAgrupacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorAgrupacion, req,res,next)
    }

    async function buscarPorCodigoEtiqueta(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigoEtiqueta, req,res,next)
    }

    return {
        buscarPorUbicacion,
        buscarPorCodigoEtiqueta,
        buscarPorAgrupacion,
    }
}

module.exports = PaqueteRepository;