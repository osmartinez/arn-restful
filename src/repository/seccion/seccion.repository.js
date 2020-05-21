const SP = require('./seccion.sp')
const GenericRepository = require('../generic.repository')()

function SeccionRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    async function buscarTodas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodas, req,res,next)
    }

    return {
        buscarPorCodigo,
        buscarTodas,
        
    }
}

module.exports = SeccionRepository;