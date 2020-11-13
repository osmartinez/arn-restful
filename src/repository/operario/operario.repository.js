
const response = require('../../shared/response');
const SP = require('./operario.sp')
const GenericRepository = require('../generic.repository')()

function OperarioRepository(dbContext) {

    async function buscar(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorId, req,res,next)
    }

    async function buscarPorCodigo(req, res, next) {
        GenericRepository.execute(dbContext, req.params, SP.BuscarPorCodigo, req,res,next)
    }

    return {
        buscar,
        buscarPorCodigo
    }
}

module.exports = OperarioRepository;