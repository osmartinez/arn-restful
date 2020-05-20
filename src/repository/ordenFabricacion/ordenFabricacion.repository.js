
const SP = require('./ordenFabricacion.sp')
const GenericRepository = require('../generic.repository')()

function OrdenFabricacionRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.Buscar, req,res,next)
    }

    async function buscarOperacion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarOperacion, req,res,next)
    }


    return {
        buscar,
        buscarOperacion,
        
    }
}

module.exports = OrdenFabricacionRepository;