
const SP = require('./ubicacion.sp')
const GenericRepository = require('../generic.repository')()

function UbicacionRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    async function ubicarAgrupacion(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.UbicarAgrupacion, req,res,next)
    }

    async function ubicarContenedor(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.UbicarContenedor, req,res,next)
    }

    async function agruparContenedor(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.AgruparContenedor, req,res,next)
    }

    async function ubicarPrepaquete(req, res, next) {
        GenericRepository.execute(dbContext, req.body, SP.UbicarPrepaquete, req,res,next)

    }

    async function vaciarUbicacion(req,res, next){
        GenericRepository.execute(dbContext, req.body, SP.VaciarUbicacion, req,res,next)
    }

    async function vaciarAgrupacion(req,res, next){
        GenericRepository.execute(dbContext, req.body, SP.VaciarAgrupacion, req,res,next)
    }

    return {
        buscarPorCodigo,
        ubicarAgrupacion,
        ubicarContenedor,
        ubicarPrepaquete,
        vaciarUbicacion,
        vaciarAgrupacion,
        agruparContenedor,

    }
}

module.exports = UbicacionRepository;