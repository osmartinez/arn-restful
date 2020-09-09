
const SP = require('./ordenFabricacion.sp')
const GenericRepository = require('../generic.repository')()

function OrdenFabricacionRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    async function buscarOperacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacion, req,res,next)
    }

    async function buscarOperaciones(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperaciones, req,res,next)
    }

    async function buscarOperacionesTallas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.buscarOperacionesTallas, req,res,next)
    }

    async function buscarOperacionesPorPrepaqueteMaquina(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacionesPorPrepaqueteMaquina, req,res,next)
    }


    return {
        buscar,
        buscarOperacion,
        buscarOperaciones,
        buscarOperacionesTallas,
        buscarOperacionesPorPrepaqueteMaquina,
    }
}

module.exports = OrdenFabricacionRepository;