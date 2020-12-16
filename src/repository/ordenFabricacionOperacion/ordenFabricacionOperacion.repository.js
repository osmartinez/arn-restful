
const SP = require('./ordenFabricacionOperacion.sp')
const GenericRepository = require('../generic.repository')()

function OrdenFabricacionOperacionRepository(dbContext) {
    async function buscarPorIdParaPuesto(req, res, next) {
        GenericRepository.execute(dbContext, req.query, SP.BuscarPorIdParaPuesto, req,res,next)
    }

    return {
        buscarPorIdParaPuesto,
        
    }
}

module.exports = OrdenFabricacionOperacionRepository;