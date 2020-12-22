
const SP = require('./ordenFabricacionOperacion.sp')
const GenericRepository = require('../generic.repository')()

function OrdenFabricacionOperacionRepository(dbContext) {
    async function buscarPorIdParaPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarPorIdParaPuesto, req,res,next)
    }

    async function buscarMaterias(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarMaterias, req,res,next)
    }

    return {
        buscarPorIdParaPuesto,
        buscarMaterias,
        
    }
}

module.exports = OrdenFabricacionOperacionRepository;