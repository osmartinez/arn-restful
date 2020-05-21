const SP = require('./maquina.sp')
const GenericRepository = require('../generic.repository')()

function MaquinaRepository(dbContext) {

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    async function buscarTodas(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodas, req,res,next)
    }

    async function buscarTodasEnSeccion(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarTodasEnSeccion, req,res,next)
    }

    return {
        buscarPorCodigo,
        buscarTodas,
        buscarTodasEnSeccion,
        
    }
}

module.exports = MaquinaRepository;